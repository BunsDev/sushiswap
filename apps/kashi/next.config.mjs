import transpileModules from 'next-transpile-modules'

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
  basePath: '/kashi',
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
        destination: '/kashi',
        permanent: true,
        basePath: false,
      },
    ]
  },
}

export default withTranspileModules(nextConfig)
