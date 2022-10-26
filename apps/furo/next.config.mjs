// import nextPwa from 'next-pwa'
import transpileModules from 'next-transpile-modules'
import { withAxiom } from 'next-axiom'

// const withPwa = nextPwa({
//   dest: 'public',
// })

const withTranspileModules = transpileModules([
  'soulswap-ui',
  'soulswap-redux-localstorage',
  'soulswap-redux-token-lists',
  'soulswap-chain',
  'soulswap-wagmi',
  'soulswap-graph-client',
])

// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/furo',
  reactStrictMode: true,
  swcMinify: false,
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/sushi-cdn/image/fetch/',
  },
  productionBrowserSourceMaps: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/furo',
        permanent: true,
        basePath: false,
      },
    ]
  },
}

// export default withAxiom(withPwa(withTranspileModules(nextConfig)))
export default withAxiom(withTranspileModules(nextConfig))
