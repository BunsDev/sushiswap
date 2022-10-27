import { ChainId } from 'soulswap-chain'
import { formatNumber } from 'soulswap-format'
import { Kpis } from 'components/Kpi'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { getBuiltGraphSDK } from '.graphclient'

const coffinBoxKpiReducer = (previousValue, currentValue, i, array) => {
  if (i === array.length - 1) {
    return previousValue.map((kpi) => ({ ...kpi, value: formatNumber(kpi.value) }))
  }

  const [
    depositCount,
    withdrawCount,
    transferCount,
    protocolCount,
    userCount,
    tokenCount,
    masterContractCount,
    cloneCount,
    flashloanCount,
    transactionCount,
    strategyCount,
    activeStrategyCount,
    pendingStrategyCount,
  ] = previousValue

  return [
    {
      name: 'Deposit Count',
      value: depositCount.value + Number(currentValue.depositCount),
    },
    {
      name: 'Withdraw Count',
      value: withdrawCount.value + Number(currentValue.withdrawCount),
    },
    {
      name: 'Transfer Count',
      value: transferCount.value + Number(currentValue.transferCount),
    },
    {
      name: 'Protocol Count',
      value: protocolCount.value + Number(currentValue.protocolCount),
    },
    {
      name: 'User Count',
      value: userCount.value + Number(currentValue.userCount),
    },
    {
      name: 'Token Count',
      value: tokenCount.value + Number(currentValue.tokenCount),
    },
    {
      name: 'Master Contract Count',
      value: masterContractCount.value + Number(currentValue.masterContractCount),
    },
    {
      name: 'Clone Count',
      value: cloneCount.value + Number(currentValue.cloneCount),
    },
    {
      name: 'Flashloan Count',
      value: flashloanCount.value + Number(currentValue.flashloanCount),
    },
    {
      name: 'Transaction Count',
      value: transactionCount.value + Number(currentValue.transactionCount),
    },
    {
      name: 'Strategy Count',
      value: strategyCount.value + Number(currentValue.strategyCount),
    },
    {
      name: 'Active Strategy Count',
      value: activeStrategyCount.value + Number(currentValue.activeStrategyCount),
    },
    {
      name: 'Pending Strategy Count',
      value: pendingStrategyCount.value + Number(currentValue.pendingStrategyCount),
    },
  ]
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
  const sdk = getBuiltGraphSDK()
  const { crossChainCoffinBoxKpis: data } = await sdk.CrossChainCoffinBoxKpis({
    chainIds: [
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
      // ChainId.KAVA,
    ],
  })
  return {
    props: {
      data,
    },
  }
}

export default function CoffinBoxPage({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const kpis: { name: string; value: string }[] = data.reduce(
    coffinBoxKpiReducer,
    Array(13).fill({
      value: 0,
    })
  )
  return (
    <div className="h-full bg-slate-100">
      <div className="max-w-full px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Cross Chain CoffinBox Kpis</h3>
          <Kpis kpis={kpis} />
        </div>
      </div>
    </div>
  )
}
