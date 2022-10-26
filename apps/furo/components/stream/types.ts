import { Amount, Currency, Type } from 'soulswap-currency'
import { FundSource } from 'soulswap-hooks'

export interface CreateStreamFormData {
  currency: Type | undefined
  startDate: string | undefined
  endDate: string | undefined
  recipient: string | undefined
  amount: string | number
  fundSource: FundSource
}

export interface CreateStreamFormDataValidated {
  currency: Currency
  startDate: string
  endDate: string
  recipient: string
  amount: string
  fundSource: FundSource
}

export interface CreateMultipleStreamFormData {
  streams: CreateStreamFormData[]
}

export interface CreateStreamFormDataTransformed
  extends Omit<CreateStreamFormDataValidated, 'startDate' | 'endDate' | 'amount'> {
  startDate: Date
  endDate: Date
  amount: Amount<Type> | undefined
}
