import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained server bundle (.next/standalone) for a small,
  // dependency-minimal Docker runtime image.
  output: "standalone",
  // Lint is run as a separate CI/dev step (`npm run lint`); pre-existing lint
  // warnings must not block the production container build.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
