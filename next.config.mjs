/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/next_training',
  images: {
    loader: 'akamai',
    basePath: "/nextjs-page", 
    assetPrefix:"/nextjs-page",
    domains: ['via.placeholder.com'],
    unoptimized: true,
  },
  assetPrefix: isProd ? 'https://myRepoGitPage.io' : undefined,
  reactStrictMode: true,
}

export default nextConfig;
