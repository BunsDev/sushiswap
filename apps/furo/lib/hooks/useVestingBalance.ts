import { Amount, Token } from 'soulswap-currency'
import { JSBI } from 'soulswap-math'
import { getCoffinBoxContractConfig, getFuroVestingContractConfig } from 'soulswap-wagmi'
import { useMemo } from 'react'
import { useContractRead } from 'wagmi'
export function useVestingBalance(chainId?: number, vestingId?: string, token?: Token): Amount<Token> | undefined {
  const {
    data: balance,
    error: balanceError,
    isLoading: balanceLoading,
  } = useContractRead({
    ...getFuroVestingContractConfig(chainId),
    functionName: 'vestBalance',
    chainId,
    enabled: !!chainId && !!vestingId,
    args: [vestingId],
    watch: true,
  })

  const {
    data: rebase,
    error: rebaseError,
    isLoading: rebaseLoading,
  } = useContractRead({
    ...getCoffinBoxContractConfig(chainId),
    functionName: 'totals',
    chainId,
    enabled: !!chainId && !!token,
    args: [token?.address],
    watch: true,
  })

  return useMemo(() => {
    if (balanceError || rebaseError || balanceLoading || rebaseLoading || !balance || !rebase || !vestingId || !token)
      return undefined

    return Amount.fromShare(token, JSBI.BigInt(balance), {
      base: JSBI.BigInt(rebase[1]),
      elastic: JSBI.BigInt(rebase[0]),
    })
  }, [balanceError, rebaseError, balanceLoading, rebaseLoading, balance, vestingId, token, rebase])
}
