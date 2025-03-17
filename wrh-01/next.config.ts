import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Run ESLint on the build process
    ignoreDuringBuilds: false, // Set to true to disable linting during builds

    // Custom ESLint configuration inline in next.config.ts
    dirs: ['pages', 'components', 'lib'], // Specify directories to lint
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      resolveAlias: {
      canvas: './empty-module.ts',
      },
    },
  },
};

export default nextConfig;
