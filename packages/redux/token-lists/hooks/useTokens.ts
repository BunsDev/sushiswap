import { ChainId } from 'soulswap-chain'
import { Token } from 'soulswap-currency'

import { TokenListsContext } from '../context'
import { useCombinedActiveList } from './useCombinedActiveList'
import { useTokensFromMap } from './useTokensFromMap'

export function useTokens(context: TokenListsContext, chainId: ChainId | undefined): { [address: string]: Token } {
  return useTokensFromMap(chainId, useCombinedActiveList(context))
}
