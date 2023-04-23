/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nexttechnology.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
