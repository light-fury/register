/**
 * Given list of RTokens, fetch all collaterals from Facade contract then
 * find the ERC20 mapping
 */
import { ethers } from 'ethers'
import { Facade } from '../src/abis'
import { ChainId } from '../src/utils/chains'
import { FACADE_ADDRESS } from '../src/utils/addresses'
import { createAnvil } from '@viem/anvil'
import { config } from 'dotenv'
import { findAllowanceSlot, findBalanceSlot } from './utils'

config()

const rtokens = [
  '0xE72B141DF173b999AE7c1aDcbF60Cc9833Ce56a8', // ETH+
  '0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F', // eUSD
  '0xaCdf0DBA4B9839b96221a8487e9ca660a48212be', // hyUSD
]

async function main() {
  // Start anvil
  const anvil = createAnvil({
    forkUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.GUARDIAN_UI_ALCHEMY_API_KEY}`,
    forkBlockNumber: 17586536n,
  })
  await anvil.start()

  const anvilProvider = new ethers.providers.JsonRpcProvider(
    'http://localhost:8545'
  )
  const provider = new ethers.providers.JsonRpcProvider(
    'https://cloudflare-eth.com'
  )
  const facadeContract = new ethers.Contract(
    FACADE_ADDRESS[ChainId.Mainnet],
    Facade,
    provider
  )
  const data = {}
  for (const rtoken of rtokens) {
    const collaterals = await facadeContract.basketTokens(rtoken)
    for (const collateral of collaterals) {
      const balanceSlot = await findBalanceSlot(collateral, anvilProvider)
      const allowanceSlot = await findAllowanceSlot(collateral, anvilProvider)
      const rtokenData = data[rtoken]
      if (rtokenData == null) {
        data[rtoken] = [[collateral, balanceSlot, allowanceSlot]]
      } else {
        data[rtoken].push([collateral, balanceSlot, allowanceSlot])
      }
    }
  }

  console.log(JSON.stringify(data))

  await anvil.stop()
}

main()
