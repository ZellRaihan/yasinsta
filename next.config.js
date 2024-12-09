/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost'],
      formats: ['image/avif', 'image/webp'],
    },
    experimental: {
      optimizeCss: true,
    },
    poweredByHeader: false,
    compress: true,
    reactStrictMode: true,
  }
  
  module.exports = nextConfig