/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fonts.googleapis.com'],
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Handle Figma asset imports
    config.module.rules.push({
      test: /figma:asset/,
      type: 'asset/resource',
    });
    
    return config;
  },
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig;