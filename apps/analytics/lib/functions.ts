import { ChainId } from 'soulswap-chain'
import { Token } from 'soulswap-currency'
import { Incentive } from 'soulswap-graph-client/.graphclient'

export const incentiveRewardToToken = (chainId: ChainId, incentive: Incentive): Token => {
  return new Token({
    chainId,
    address: incentive.rewardToken.address,
    symbol: incentive.rewardToken.symbol,
    decimals: incentive.rewardToken.decimals,
  })
}
