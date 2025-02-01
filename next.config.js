/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/muhammed-sayar/' : '',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: process.env.NODE_ENV === 'production' ? '/muhammed-sayar/_next/static/images/' : '/_next/static/images/',
            outputPath: 'static/images/',
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig 