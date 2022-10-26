import transpileModules from 'next-transpile-modules'

const withTranspileModules = transpileModules([
  'soulswap-redux-token-lists',
  'soulswap-ui',
  'soulswap-graph-client',
])

// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/internal',
  reactStrictMode: true,
  swcMinify: false,
  productionBrowserSourceMaps: true,
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/sushi-cdn/image/fetch/',
  },
}

export default withTranspileModules(nextConfig)
