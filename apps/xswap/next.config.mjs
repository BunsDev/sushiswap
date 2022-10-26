import transpileModules from 'next-transpile-modules'
import { withAxiom } from 'next-axiom'

const withTranspileModules = transpileModules([
  'soulswap-redux-token-lists',
  'soulswap-redux-localstorage',
  'soulswap-chain',
  'soulswap-wagmi',
  'soulswap-ui',
])

// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/xswap',
  reactStrictMode: true,
  swcMinify: false,
  productionBrowserSourceMaps: true,
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/sushi-cdn/image/fetch/',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/xswap',
        permanent: true,
        basePath: false,
      },
    ]
  },
}

export default withAxiom(withTranspileModules(nextConfig))
