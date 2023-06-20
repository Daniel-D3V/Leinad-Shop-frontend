/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
      {
        source: '/dashboard',
        destination: '/dashboard/main'
      }
    ]
  },
  images: {
    domains: ["cdn.discordapp.com"]
  },
  pageExtensions: ["page.tsx", "ts"],
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
