import { coffinBoxExports } from './coffinBoxExports'
import { CoffinBoxV1 } from './CoffinBoxV1'
import { ChainId } from 'soulswap-chain'
import { useContract, useProvider } from 'wagmi'

// TODO: Move to deployments
export const COFFINBOX_ADDRESS: Record<number, string> = {
  [ChainId.ETHEREUM]: '0xBC321C2e7A7FA48DcF0C09E088950C8172c2Ecc9',
  [ChainId.FANTOM]: '0xF539C37275e947F24480fAb9f7e302aE827570b2',
  [ChainId.AVALANCHE]: '0x51d7d0d03A9E38Ba550f24cea28B992AD2350fee',
}

export const getCoffinBoxContractConfig = (chainId: number | undefined) => ({
  addressOrName:
    coffinBoxExports[chainId?.toString() as keyof Omit<typeof coffinBoxExports, '31337'>]?.[0]?.contracts?.CoffinBoxV1
      ?.address ?? '',
  contractInterface:
    coffinBoxExports[chainId?.toString() as keyof Omit<typeof coffinBoxExports, '31337'>]?.[0]?.contracts?.CoffinBoxV1
      ?.abi ?? [],
})

export function useCoffinBoxContract(chainId: number | undefined) {
  return useContract<CoffinBoxV1>({
    ...getCoffinBoxContractConfig(chainId),
    signerOrProvider: useProvider({ chainId }),
  })
}
