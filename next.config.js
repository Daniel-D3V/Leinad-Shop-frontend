/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ]
  },
  images: {
    domains: ["cdn.discordapp.com"]
  },
  pageExtensions: ["page.tsx", "ts", "tsx"],
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
