/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withBundleAnalyzer = require('@next/bundle-analyzer')

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    appDir: true,
    // optimizeCss: true,
    // typedRoutes: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
