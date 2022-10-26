import { Amount, Currency } from 'soulswap-currency'
import { Fraction, JSBI, Percent } from 'soulswap-math'

const ONE = new Fraction(1, 1)

export function calculateSlippageAmount(value: Amount<Currency>, slippage: Percent): [JSBI, JSBI] {
  if (slippage.lessThan(0) || slippage.greaterThan(ONE)) throw new Error('Unexpected slippage')
  return [value.multiply(ONE.subtract(slippage)).quotient, value.multiply(ONE.add(slippage)).quotient]
}
