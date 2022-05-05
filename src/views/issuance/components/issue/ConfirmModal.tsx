import { getAddress } from '@ethersproject/address'
import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { formatEther, formatUnits, parseEther } from '@ethersproject/units'
import { ERC20Interface, RSVManagerInterface, RTokenInterface } from 'abis'
import { Button, NumericalInput } from 'components'
import Modal from 'components/modal'
import useBlockNumber from 'hooks/useBlockNumber'
import {
  useBasketHandlerContract,
  useContract,
  useRTokenContract,
  useTokenContract,
} from 'hooks/useContract'
import useDebounce from 'hooks/useDebounce'
import useMountedState from 'hooks/useMountedState'
import { useAtomValue, useSetAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import { addTransactionAtom, allowanceAtom } from 'state/atoms'
import { Box, Text } from 'theme-ui'
import { ReserveToken, TransactionState } from 'types'
import { hasAllowance } from 'utils'
import { TRANSACTION_STATUS } from 'utils/constants'
import { quote } from 'utils/rsv'

interface Props {
  data: ReserveToken
  amount: string
  issuableAmount: number
  onClose: () => void
}

interface IQuantities {
  [x: string]: BigNumber
}

/**
 * Build issuance required transactions
 *
 * @param data <ReserveToken>
 * @param amount <string>
 * @param quantities <BigNumber[]>
 * @returns TransactionState[]
 */
const buildTransactions = (
  data: ReserveToken,
  amount: string,
  quantities: IQuantities,
  allowances: IQuantities
): TransactionState[] => {
  const tokenQuantities: [string, BigNumber][] = []

  // Create token approvals calls array
  const transactions: TransactionState[] = data.basket.collaterals.map(
    ({ token }) => {
      const tokenAmount = quantities[getAddress(token.address)]
      const description = `Approve ${formatUnits(
        tokenAmount,
        token.decimals
      )} ${token.symbol}`

      // Fill token quantities on the same map
      tokenQuantities.push([token.address, tokenAmount])

      return {
        description,
        status: allowances[getAddress(token.address)].gte(tokenAmount)
          ? TRANSACTION_STATUS.SKIPPED
          : TRANSACTION_STATUS.PENDING,
        value: formatUnits(tokenAmount, token.decimals),
        call: {
          abi: ERC20Interface,
          address: token.address,
          method: 'approve',
          args: [data.isRSV ? data.id : data.token.address, tokenAmount],
        },
      }
    }
  )

  // Create token issuance contract call
  transactions.push({
    description: `Issue ${amount} ${data.token.symbol}`,
    status: hasAllowance(allowances, tokenQuantities)
      ? TRANSACTION_STATUS.PENDING
      : TRANSACTION_STATUS.PENDING_ALLOWANCE,
    value: amount,
    requiredAllowance: tokenQuantities, // Send quantities as an extra prop for allowance check before issuance
    call: {
      abi: data.isRSV ? RSVManagerInterface : RTokenInterface,
      address: data.isRSV ? data.id : data.token.address,
      method: 'issue',
      args: [parseEther(amount)],
    },
  })

  return transactions
}

const ConfirmModal = ({ data, amount, issuableAmount, onClose }: Props) => {
  const [value, setValue] = useState(amount)
  const debouncedValue = useDebounce(value, 10)
  const addTransaction = useSetAtom(addTransactionAtom)
  const allowances = useAtomValue(allowanceAtom)
  const basketHandler = useBasketHandlerContract(data.basketHandler)
  const [txs, setTxs] = useState([] as TransactionState[])
  const [gasEstimates, setGasEstimates] = useState([] as BigNumber[])
  const isMounted = useMountedState()
  const blockNumber = useBlockNumber()
  const tokenContract = useTokenContract(data.token.address, true)!
  const rTokenContract = data.isRSV
    ? useContract(data.id, RSVManagerInterface, true)
    : useRTokenContract(data.token.address)

  const fetchQuantities = useCallback(async () => {
    try {
      const issueAmount = parseEther(value)
      let quantities: IQuantities = {}

      // RSV have hardcoded quantities
      if (data.isRSV) {
        quantities = quote(issueAmount)
      } else if (basketHandler) {
        const quoteResult = await basketHandler.quote(issueAmount, 2)
        quantities = quoteResult.erc20s.reduce(
          (prev, current, currentIndex) => {
            prev[getAddress(current)] = quoteResult.quantities[currentIndex]
            return prev
          },
          {} as any
        )
      }

      if (!Object.keys(quantities).length) {
        throw new Error('Unable to fetch quantities')
      }

      if (isMounted()) {
        setTxs(buildTransactions(data, amount, quantities, allowances))
      }
    } catch (e) {
      // TODO: Handle error case
      console.error('failed fetching quantities', e)
    }
  }, [value])

  // TODO: Move to a hook
  const fetchGasEstimate = useCallback(async () => {
    try {
      const estimates = await Promise.all(
        txs.map(async (tx) => {
          const contract: Contract =
            tx.call.method === 'approve'
              ? tokenContract.attach(tx.call.address)
              : rTokenContract!

          // TODO: Use hardcoded issue gas cost
          if (tx.call.method !== 'approve') {
            return BigNumber.from(1)
          }

          return contract.estimateGas[tx.call.method](...tx.call.args)
        })
      )

      setGasEstimates(estimates)
    } catch (e) {
      console.error('error fetching gas estimate', e)
    }
  }, [txs])

  const isValid = () => {
    const _value = Number(value)
    return _value > 0 && _value <= issuableAmount
  }

  useEffect(() => {
    if (isValid()) {
      fetchQuantities()
    }
  }, [debouncedValue])

  // approvals gas
  useEffect(() => {
    if (txs.length && blockNumber) {
      fetchGasEstimate()
    }
  }, [blockNumber, txs])

  const handleIssue = () => {
    addTransaction(txs)
    onClose()
  }

  return (
    <Modal title="Confirm Issuance" onClose={onClose}>
      <NumericalInput
        id="mint"
        placeholder="Mint amount"
        value={value}
        onChange={setValue}
      />
      <Box mt={3}>
        <Text>Tx to be run</Text>
        <Box mt={3}>
          {txs.map((tx, index) => (
            <Box key={index}>
              <Text>{tx.description}</Text>...
              <Text>Gas cost: $</Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Button
        sx={{ width: '100%' }}
        disabled={!isValid()}
        mt={2}
        onClick={handleIssue}
      >
        + Mint {data.token.symbol}
      </Button>
    </Modal>
  )
}

export default ConfirmModal