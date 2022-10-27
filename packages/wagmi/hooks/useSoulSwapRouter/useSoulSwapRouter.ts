import { useMemo } from 'react'
import { soulSwapExports } from './soulSwapExports'
import { useSigner } from 'wagmi'
import { getContract } from 'wagmi/actions'

type Exports = typeof soulSwapExports

// TODO CELO NOT FOUND?
export const getSoulSwapRouterContractConfig = (chainId: number | undefined) => ({
  addressOrName:
    soulSwapExports[chainId?.toString() as keyof Exports]?.[0]?.contracts?.UniswapV2Router02?.address ?? '',
  contractInterface:
    soulSwapExports[chainId?.toString() as keyof Exports]?.[0]?.contracts?.UniswapV2Router02?.abi ?? [],
})

export function useSoulSwapRouterContract(chainId: number | undefined) {
  const { data: signerOrProvider } = useSigner()
  return useMemo(() => {
    if (!chainId || !(chainId in soulSwapExports)) return
    return getContract({
      ...getSoulSwapRouterContractConfig(chainId),
      signerOrProvider,
    })
  }, [chainId, signerOrProvider])
}
