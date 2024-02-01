/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const repo = 'next_training'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = process.env.NODE_ENV === 'production' ? {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    domains: ['via.placeholder.com'],
    unoptimized: true,
  },
} : {
  basePath: basePath,
  images: {
    domains: ['via.placeholder.com'],
  },
};

export default nextConfig;
 

