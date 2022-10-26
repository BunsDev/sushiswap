import { ChainId } from 'soulswap-chain'
import { Token } from 'soulswap-currency'
import { ConstantProductPool, Pair, StablePool } from 'soulswap-amm'
import { Incentive } from 'soulswap-graph-client/.graphclient'

export const isConstantProductPool = (
  pool: Pair | ConstantProductPool | StablePool | null
): pool is ConstantProductPool => {
  return pool instanceof ConstantProductPool
}

export const isStablePool = (pool: Pair | StablePool | null): pool is StablePool => {
  return pool instanceof StablePool
}

export const isLegacyPool = (pool: Pair | ConstantProductPool | StablePool | null): pool is Pair => {
  return pool instanceof Pair
}

export const incentiveRewardToToken = (chainId: ChainId, incentive: Incentive): Token => {
  return new Token({
    chainId,
    address: incentive.rewardToken.address,
    symbol: incentive.rewardToken.symbol,
    decimals: incentive.rewardToken.decimals,
  })
}
