import { FacadeInterface } from 'abis'
import { Facade } from 'abis/types'
import { BigNumber } from 'ethers'
import { formatUnits, getAddress } from 'ethers/lib/utils'
import { atom } from 'jotai'
import {
  basketNonceAtom,
  getValidWeb3Atom,
  isModuleLegacyAtom,
  rTokenAssetsAtom,
  rTokenCollaterizedAtom,
  rTokenContractsAtom,
} from 'state/atoms'
import { getContract, safeParseEther } from 'utils'
import { FACADE_ADDRESS } from 'utils/addresses'
import { atomWithLoadable } from 'utils/atoms/utils'
import { redeemAmountDebouncedAtom } from 'views/issuance/atoms'

interface RedeemQuote {
  [x: string]: { amount: BigNumber; targetAmount: BigNumber; loss: number }
}

// UI element controller
export const customRedeemNonceAtom = atom<null | number>(null)

// If custom is set return that nonce
export const redeemNonceAtom = atom((get) => {
  return get(customRedeemNonceAtom) || get(basketNonceAtom)
})

export const redeemQuotesAtom = atomWithLoadable(async (get) => {
  const currentNonce = get(basketNonceAtom)
  const contracts = get(rTokenContractsAtom)
  const assets = get(rTokenAssetsAtom)
  const { issuance: isLegacy } = get(isModuleLegacyAtom)
  const isCollaterized = get(rTokenCollaterizedAtom)
  const amount = get(redeemAmountDebouncedAtom)
  const { provider, chainId } = get(getValidWeb3Atom)
  const quotes: { [x: number]: RedeemQuote } = {}

  if (!provider || !contracts?.token || !assets) {
    return null
  }

  if (isNaN(+amount) || Number(amount) <= 0) {
    return { [currentNonce]: {} } // empty default to 0 on UI but no loading state
  }

  const facadeReadContract = getContract(
    FACADE_ADDRESS[chainId],
    FacadeInterface,
    provider
  ) as Facade
  const parsedAmount = safeParseEther(amount)

  // TODO: Legacy remove after migration
  if (isLegacy) {
    const quote = await facadeReadContract.callStatic.issue(
      contracts.token.address,
      parsedAmount
    )
    quotes[currentNonce] = quote.tokens.reduce(
      (prev, current, currentIndex) => {
        prev[getAddress(current)] = {
          amount: quote.deposits[currentIndex],
          targetAmount: BigNumber.from(0),
          loss: 0,
        }
        return prev
      },
      {} as RedeemQuote
    )
  } else {
    const quote = await facadeReadContract.callStatic.redeem(
      contracts.token.address,
      parsedAmount
    )
    quotes[currentNonce] = quote.tokens.reduce(
      (prev, current, currentIndex) => {
        const assetAddress = getAddress(current)
        const amount = quote.available[currentIndex]
        const targetAmount = quote.withdrawals[currentIndex]
        let loss = 0

        if (!amount.eq(targetAmount)) {
          loss =
            (+formatUnits(amount, assets[assetAddress].token.decimals) * 100) /
            +formatUnits(targetAmount, assets[assetAddress].token.decimals)
        }

        prev[assetAddress] = {
          amount,
          targetAmount,
          loss,
        }
        return prev
      },
      {} as RedeemQuote
    )

    // Quote previous nonce
    if (!isCollaterized) {
      const prevQuote = await facadeReadContract.callStatic.redeemCustom(
        contracts.token.address,
        parsedAmount,
        [BigNumber.from(currentNonce - 1)],
        [BigNumber.from('1')]
      )

      quotes[currentNonce - 1] = prevQuote.tokens.reduce(
        (prev, current, currentIndex) => {
          prev[getAddress(current)] = {
            amount: prevQuote.withdrawals[currentIndex],
            targetAmount: BigNumber.from(0),
            loss: 0,
          }
          return prev
        },
        {} as RedeemQuote
      )
    }
  }

  return quotes
})