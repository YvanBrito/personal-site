/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nexttechnology.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
