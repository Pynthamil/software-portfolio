import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'my-blog-tan-tau.vercel.app',
      },
    ],
  },
};

export default nextConfig;
