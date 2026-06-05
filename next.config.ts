import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  experimental: {
    // Optimize package imports for better tree-shaking
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
