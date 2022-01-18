import { ChainId } from '@usedapp/core'
export { default as ROUTES } from './routes'

export const TRANSACTION_STATUS = {
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
  CONFIRMED: 'CONFIRMED',
  REJECTED: 'REJECTED',
}

export const DEPOSIT_STATUS = {
  PENDING_APPROVAL: 'PENDING_APPROVAL',
  APPROVAL_SUBMITTED: 'APPROVAL_SUBMITTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  FAILED: 'FAILED',
  SUBMITTED: 'SUBMITTED',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
}

export const DEFAULT_CHAIN =
  Number(process.env.REACT_APP_DEFAULT_CHAIN) || ChainId.Mainnet
