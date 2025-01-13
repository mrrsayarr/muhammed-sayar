/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/WebPageNextJs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/WebPageNextJs/' : '',
}

module.exports = nextConfig 