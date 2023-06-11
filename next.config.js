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
  pageExtensions: ["page.tsx", "ts", "tsx"],
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
