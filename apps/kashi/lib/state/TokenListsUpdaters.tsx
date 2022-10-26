import { ChainId } from 'soulswap-chain'

import { Updater } from './TokenListsUpdater'

interface Props {
  chainIds: ChainId[]
}

export function Updaters({ chainIds }: Props) {
  return (
    <>
      {chainIds.map((chainId) => (
        <Updater key={chainId} chainId={chainId} />
      ))}
    </>
  )
}
