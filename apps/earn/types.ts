import { Token } from 'soulswap-currency'
import { Pair } from 'soulswap-graph-client/.graphclient'
import { Chef, Incentive } from 'soulswap-wagmi'

export interface PairWithFarmRewards extends Pair {
  incentives: Incentive<Token>[]
  farmId: number | undefined
  chefType: Chef | undefined
}

export interface PairWithAlias extends Pair {
  dayChangeData: {
    id: string
    date: number
    volumeUSD: number
    liquidityUSD: number
    transactionCount: number
  }[]
}
