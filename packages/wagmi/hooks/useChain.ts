import { Chain, chains } from 'soulswap-chain'
import { useMemo } from 'react'

export const useChain = (chainId: number): Chain => {
  return useMemo(() => chains[chainId], [chainId])
}
