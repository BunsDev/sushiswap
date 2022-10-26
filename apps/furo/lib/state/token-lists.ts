import { createTokenLists, TokenListHooks } from 'soulswap-redux-token-lists'

// Create a token lists instance with default settings
export const tokenLists: ReturnType<typeof createTokenLists> = createTokenLists()

export const { useActiveListUrls, useInactiveListUrls, useIsListActive, useTokens }: TokenListHooks = tokenLists.hooks
