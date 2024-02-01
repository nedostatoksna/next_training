/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = process.env.NODE_ENV === 'production' ? {
  assetPrefix: isProd ? 'https:///nedostatoksna/next_training/' : undefined,
  basePath: '/next_training',
  images: {
    remotePatterns: ['via.placeholder.com'],
    unoptimized: true,
  },
} : {
  basePath: '/next_training',
  images: {
    remotePatterns: ['via.placeholder.com'],
  },
};

export default nextConfig;
 

