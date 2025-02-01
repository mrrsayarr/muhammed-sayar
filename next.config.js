/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/muhammed-sayar/' : '',
}

module.exports = nextConfig 