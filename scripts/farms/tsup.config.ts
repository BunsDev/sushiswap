import { defineConfig } from 'tsup'

export default defineConfig({
  noExternal: ['soulswap-wagmi', 'soulswap-graph-client/config'],
})
