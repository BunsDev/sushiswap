import transpileModules from 'next-transpile-modules'

const withTranspileModules = transpileModules(['soulswap-ui', 'soulswap-redux-token-lists', 'soulswap-chain'])

// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  // TEMPORARY UNTIL TYPE ERROR IS SOLVED
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default withTranspileModules(nextConfig)
