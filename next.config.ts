import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Don't fail build on ESLint warnings
    ignoreDuringBuilds: false,
    // Specify directories to exclude from ESLint during build
    dirs: ['src', 'pages', 'components', 'lib', 'utils'],
  },
  typescript: {
    // Don't fail build on TypeScript errors during development
    ignoreBuildErrors: false,
  },

  // Exclude generated files from being processed
  webpack: (config, { isServer }) => {
    // Ignore generated Prisma files during webpack processing
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/src/generated/**',
        '**/prisma/generated/**',
      ],
    };
    return config;
  },
};

export default nextConfig;
