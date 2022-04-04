import { useWeb3React } from '@web3-react/core'
import { Contract } from 'ethers'
import { useMemo } from 'react'
import {
  encodeCallData,
  decodeCallResult,
  CallResult,
} from 'state/providers/web3/lib/helpers'
import { ContractMethodNames, Falsy, Params, TypedContract } from 'types'
import { useRawCalls } from './useChainCalls'

/**
 * @public
 */
export interface Call<
  T extends TypedContract = Contract,
  MN extends ContractMethodNames<T> = ContractMethodNames<T>
> {
  contract: T
  method: MN
  args: Params<T, MN>
}

/**
 * Makes calls to specific methods of specific contracts and returns values or an error if present.
 * The hook will cause the component to refresh when a new block is mined and the return values change.
 * A syntax sugar for useRawCalls that uses ABI, function name, and arguments instead of raw data.
 * @param calls a list of contract calls , also see {@link Call}.
 * @param queryParams see {@link QueryParams}.
 * @returns a list of results (see {@link CallResult} in {@link useCall} above).
 */
export function useCalls(
  calls: (Call | Falsy)[]
): CallResult<Contract, string>[] {
  const { provider } = useWeb3React()

  const rawCalls = calls.map((call) =>
    provider !== undefined ? encodeCallData(call) : undefined
  )
  const results = useRawCalls(rawCalls)
  return useMemo(
    () => results.map((result, idx) => decodeCallResult(calls[idx], result)),
    [results]
  )
}

// Ported from https://github.com/TrueFiEng/useDApp/blob/master/packages/core/src/hooks/useCall.ts
/**
 * Makes a call to a specific method of a specific contract and returns the value or an error if present.
 * The hook will cause the component to refresh when a new block is mined and the return value changes.
 * A syntax sugar for useRawCall that uses ABI, function name, and arguments instead of raw data.
 * If typechain contract is used in call parameter then method name and arguments will be type checked.
 * Result will be typed as well.
 *
 * @param call a single call to a contract , also see {@link Call}
 * @returns The hook returns {@link CallResult} type.
 *          That is: undefined when call didn't return yet or a object { value | error } if it did,
 *          value: any[] | undefined - array of results or undefined if error occurred,
 *          error: Error | undefined - encountered error or undefined if call was successful.
 */
export function useCall<
  T extends TypedContract,
  MN extends ContractMethodNames<T>
>(call: Call<T, MN> | Falsy): CallResult<T, MN> {
  return useCalls([call])[0]
}
