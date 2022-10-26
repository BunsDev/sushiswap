import transpileModules from 'next-transpile-modules'

const withTranspileModules = transpileModules(['soulswap-ui'])

// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
}

export default withTranspileModules(nextConfig)
