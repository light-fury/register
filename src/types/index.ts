import { BigNumber } from '@ethersproject/bignumber'
import { Interface } from '@ethersproject/abi'
import { Contract, ContractTransaction } from '@ethersproject/contracts'

export interface StringMap {
  [key: string]: any
}

export interface WalletTransaction {
  [x: string]: TransactionState[]
}

export interface TransactionMap {
  [x: string]: WalletTransaction
}

export interface ContractCall {
  abi: Interface
  address: string
  method: string
  args: any[]
}

export interface TransactionState {
  id: string // uuid generated
  description: string
  status: string
  value: string
  call: {
    abi: string
    address: string
    method: string
    args: any[]
  }
  hash?: string
  error?: string
  confirmedAt?: number
  // timestamps
  createdAt?: number // timestamp UTC
  updatedAt?: number // timestamp UTC
}

// TODO: Improve
export interface TransactionRecord {
  type: string
  amount: number
  timestamp: string
  hash: string
}

export interface Wallet {
  address: string
  alias: string
}
export interface RawCall {
  address: string
  data: string
}

export type Awaited<T> = T extends PromiseLike<infer U> ? U : T

export type Params<
  T extends TypedContract,
  FN extends ContractFunctionNames<T> | ContractMethodNames<T>
> = Parameters<T['functions'][FN]>

export type RawCallResult =
  | {
      value: string
      success: boolean
    }
  | undefined

export type MulticallState = {
  [address: string]:
    | {
        [data: string]: RawCallResult
      }
    | undefined
}

export type Falsy = undefined | false | '' | null

export type TypedContract = Contract & {
  functions: Record<string, (...args: any[]) => any>
}

export type ContractFunctionNames<T extends TypedContract> = keyof {
  [P in keyof T['functions'] as ReturnType<
    T['functions'][P]
  > extends Promise<ContractTransaction>
    ? P
    : never]: void
} &
  string

export type ContractMethodNames<T extends TypedContract> = keyof {
  [P in keyof T['functions'] as ReturnType<T['functions'][P]> extends Promise<
    any[]
  >
    ? P
    : never]: void
} &
  string

// Generic token definition ERC20 + extra data
export interface Token {
  address: string
  symbol: string
  name: string
  decimals: number
  logo?: string
}

export interface BigNumberMap {
  [x: string]: BigNumber
}

/**
 * ReserveToken
 *
 * This interface represents a complete RToken ecosystem
 */
export interface ReserveToken extends Token {
  collaterals: Token[] // current basket collateral list
  stToken?: Token // staking RSR token
  isRSV?: boolean // only for RSV
}
