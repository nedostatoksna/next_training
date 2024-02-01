/** @type {import('next').NextConfig} */

const nextConfig = process.env.NODE_ENV === 'production' ? {
  assetPrefix: '/next_training/',
  basePath: '/next_training',
  images: {
    domains: ['via.placeholder.com'],
    unoptimized: true,
  },
} : {
  basePath: '/next_training',
  images: {
    domains: ['via.placeholder.com'],
  },
};

export default nextConfig;
 

