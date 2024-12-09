/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  // Add experimental config
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
