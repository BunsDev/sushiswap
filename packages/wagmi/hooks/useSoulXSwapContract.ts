import soulxswapExports from 'soulswap-soulxswap/exports.json'
import { soulxswap } from 'soulswap-soulxswap/typechain'
import { useContract, useProvider, useSigner } from 'wagmi'

export const getsoulxswapContractConfig = (chainId: number | undefined) => ({
  addressOrName:
    soulxswapExports[chainId?.toString() as keyof Omit<typeof soulxswapExports, '31337'>]?.[0]?.contracts?.soulxswap
      ?.address ?? '',
  contractInterface:
    soulxswapExports[chainId?.toString() as keyof Omit<typeof soulxswapExports, '31337'>]?.[0]?.contracts?.soulxswap
      ?.abi ?? [],
})

export function usesoulxswapContract(chainId: number | undefined) {
  const { data: signerOrProvider } = useSigner()
  return useContract<soulxswap>({
    ...getsoulxswapContractConfig(chainId),
    signerOrProvider,
  })
}

export function usesoulxswapContractWithProvider(chainId: number | undefined) {
  const provider = useProvider({ chainId })
  return useContract<soulxswap>({
    ...getsoulxswapContractConfig(chainId),
    signerOrProvider: provider,
  })
}
