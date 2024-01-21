/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/next_pages',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: isProd ? 'https://myRepoGitPage.io' : undefined,
  reactStrictMode: true,
}

export default nextConfig;
