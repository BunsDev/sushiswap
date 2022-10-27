import { COFFINBOX_SUBGRAPH_NAME, SUBGRAPH_HOST } from 'soulswap-graph-config'

import { pager } from '../pager'
import { coffinTokensQuery } from '../queries/coffinbox'
import { getNativePrice, getTokenPrices } from './exchange'

export default async function getCoffinTVL() {
  const coffinTVLQueries: Promise<number>[] = []
  for (const chainId of Object.keys(COFFINBOX_SUBGRAPH_NAME) as unknown as number[]) {
    coffinTVLQueries.push(
      (async function () {
        try {
          const nativePrice = await getNativePrice(chainId)
          const { tokens: coffinTokens } = await pager(
            `https://${SUBGRAPH_HOST[chainId]}/${COFFINBOX_SUBGRAPH_NAME[chainId]}`,
            coffinTokensQuery
          )
          const tokenPrices = await getTokenPrices(
            coffinTokens.map((coffinToken) => coffinToken.id),
            chainId
          )

          return coffinTokens
            .map((coffinToken) => {
              const tokenPriceUSD =
                Number(tokenPrices.find((tokenPrice) => tokenPrice.id === coffinToken.id)?.derivedETH ?? 0) * nativePrice

              return Number((coffinToken.rebase.elastic / 10 ** coffinToken.decimals) * tokenPriceUSD)
            })
            .reduce((acc, cur) => Number(acc) + Number(cur), 0)
        } catch {
          return 0
        }
      })()
    )
  }

  return (await Promise.all(coffinTVLQueries)).reduce((acc, cur) => acc + cur, 0)
}
