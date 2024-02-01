/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/next_training',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? 'https:///nedostatoksna/next_training/' : undefined,
  reactStrictMode: true,
}

export default nextConfig;
