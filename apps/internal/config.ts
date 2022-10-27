import { ChainId } from 'soulswap-chain'
import { SUSHISWAP_ENABLED_NETWORKS, TRIDENT_ENABLED_NETWORKS } from 'soulswap-graph-config'

export const COFFINBOX_ADDRESS: Record<number | string, string> = {
  [ChainId.ETHEREUM]: '0xBC321C2e7A7FA48DcF0C09E088950C8172c2Ecc9',
  [ChainId.POLYGON]: '0x0319000133d3AdA02600f0875d2cf03D442C3367',
  [ChainId.GNOSIS]: '0xE2d7F5dd869Fc7c126D21b13a9080e75a4bDb324',
  [ChainId.BSC]: '0xBC321C2e7A7FA48DcF0C09E088950C8172c2Ecc9',
  [ChainId.ARBITRUM]: '0x74c764D41B77DBbb4fe771daB1939B00b146894A',
  [ChainId.AVALANCHE]: '0x0711B6026068f736bae6B213031fCE978D48E026',
  [ChainId.HECO]: '0xBC321C2e7A7FA48DcF0C09E088950C8172c2Ecc9',
}

export const KASHI_ADDRESS: Record<number | string, string> = {
  [ChainId.ETHEREUM]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.POLYGON]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
  [ChainId.GNOSIS]: '0x7a6DA9903d0a481F40b8336c1463487BC8C0407e',
  [ChainId.BSC]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.ARBITRUM]: '0xa010eE0226cd071BeBd8919A1F675cAE1f1f5D3e',
  [ChainId.AVALANCHE]: '0x513037395FA0C9c35E41f89189ceDfE3bD42fAdb',
  [ChainId.HECO]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
}

// "deploy-ethereum": "graph deploy --product hosted-service sushiswap/coffinbox-ethereum",
// "deploy-polygon": "graph deploy --product hosted-service sushiswap/coffinbox-polygon",
// "deploy-avalanche": "graph deploy --product hosted-service sushiswap/coffinbox-avalanche",
// "deploy-bsc": "graph deploy --product hosted-service sushiswap/coffinbox-bsc",
// "deploy-fantom": "graph deploy --product hosted-service sushiswap/coffinbox-fantom",
// "deploy-gnosis": "graph deploy --product hosted-service sushiswap/coffinbox-gnosis",
// "deploy-arbitrum": "graph deploy --product hosted-service sushiswap/coffinbox-arbitrum",
// "deploy-celo": "graph deploy --product hosted-service sushiswap/coffinbox-celo",
// "deploy-moonriver": "graph deploy --product hosted-service sushiswap/coffinbox-moonriver",
// "deploy-moonbeam": "graph deploy --product hosted-service sushiswap/coffinbox-moonbeam",
// "deploy-optimism": "graph deploy --product hosted-service sushiswap/coffinbox-optimism",
// "deploy-harmony": "graph deploy --product hosted-service sushiswap/coffinbox-harmony",
// "deploy-kava": "graph deploy --node https://pvt-admin.graph.kava.io sushiswap/coffinbox-kava"

export const SUPPORTED_CHAIN_IDS = [
  ChainId.ETHEREUM,
  ChainId.POLYGON,
  ChainId.AVALANCHE,
  ChainId.BSC,
  ChainId.FANTOM,
  ChainId.GNOSIS,
  ChainId.ARBITRUM,
  ChainId.CELO,
  ChainId.MOONRIVER,
  ChainId.MOONBEAM,
  ChainId.OPTIMISM,
  ChainId.HARMONY,
  ChainId.KAVA,
]

export const TOKENS_SUPPORTED_CHAIN_IDS = [...TRIDENT_ENABLED_NETWORKS, ...SUSHISWAP_ENABLED_NETWORKS]
