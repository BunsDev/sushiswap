import { AddressZero } from '@ethersproject/constants'
import { ChainId } from 'soulswap-chain'
import { Native, Token } from 'soulswap-currency'

import { Token as TokenDTO } from '.graphclient'

export function toToken(token: TokenDTO, chainId: ChainId): Token {
  if (token.id === AddressZero) {
    return Native.onChain(chainId).wrapped
  }

  return new Token({
    chainId,
    address: token.id,
    decimals: Number(token.decimals),
    symbol: token.symbol,
    name: token.name,
  })
}
