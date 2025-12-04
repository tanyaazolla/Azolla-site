/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '52.77.247.161',
      },
      {
        protocol: 'https',
        hostname: 'cms.azolla.sg',
      },
      {
        protocol: 'https',
        hostname: 's3.ap-southeast-1.amazonaws.com',
      },
    ],
  },
  ...nextConfig,
};
