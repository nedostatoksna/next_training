/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: "/nextjs-page", 
  assetPrefix:"/nextjs-page",
  images: {
    loader: 'akamai',
    path: '',
    domains: ['via.placeholder.com'],
    unoptimized: true,
  },
  assetPrefix: isProd ? 'https://myRepoGitPage.io' : undefined,
  reactStrictMode: true,
}

export default nextConfig;
