import { Amount, Token } from 'soulswap-currency'
import { JSBI } from 'soulswap-math'

import { Fee } from '../Fee'

export abstract class Pool {
  public abstract readonly liquidityToken: Token

  // Swap gas cost, could be different depending on source & dest,
  // wallet->wallet, coffin->wallet/wallet->coffin, coffin->coffin

  // wallet->wallet: ???
  // coffin->wallet/wallet->coffin: ???
  // coffin->coffin: ???
  public abstract readonly swapGasCost: JSBI

  // Minimum pool liquidity, typically 1000
  public abstract readonly minLiquidity: JSBI

  public abstract get chainId(): number

  public abstract get fee(): Fee

  public abstract get assets(): Token[]

  public abstract get reserves(): Amount<Token>[]

  public abstract getLiquidityMinted(
    totalSupply: Amount<Token>,
    tokenAmountA: Amount<Token>,
    tokenAmountB: Amount<Token>
  ): Amount<Token>

  public abstract getLiquidityValue(token: Token, totalSupply: Amount<Token>, liquidity: Amount<Token>): Amount<Token>

  public abstract involvesToken(token: Token): boolean
}
