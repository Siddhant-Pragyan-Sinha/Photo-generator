/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media-hosting.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'wearemist.in',
      },
      {
        protocol: 'https',
        hostname: '*.clerk.accounts.dev', 
      },
      {
        protocol: 'https',
        hostname: 'instagram.fbom2-2.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn1.gstatic.com',
      },
    ],
  },
};

export default nextConfig;