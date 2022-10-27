import { ChainId } from 'soulswap-chain'
import { Amount, Token } from 'soulswap-currency'
import { JSBI } from 'soulswap-math'

import { toToken } from './mapper'
import { type Transaction as TransactionDTO, type User, Maybe, TransactionType } from '.graphclient'

export class Transaction {
  public readonly id: string
  public readonly status: Maybe<TransactionType> | undefined
  public readonly recipient: User
  public readonly token: Token
  public readonly amount: Amount<Token>
  public readonly timestamp: Date
  public readonly toCoffinBox: boolean
  public readonly txHash: string

  public constructor(transaction: TransactionDTO, chainId: ChainId) {
    this.id = transaction.id
    // this.status = TransactionType[transaction.type]
    this.status = transaction.type
    this.token = toToken(transaction.token, chainId)
    this.recipient = transaction.to
    this.amount = Amount.fromRawAmount(this.token, JSBI.BigInt(transaction.amount))
    this.timestamp = new Date(parseInt(transaction.createdAtTimestamp) * 1000)
    this.toCoffinBox = transaction.toCoffinBox
    this.txHash = transaction.txHash
  }
}
