import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "finditpr.com",
      },
      {
        protocol: "https",
        hostname: "images.finditpr.com",
      },
      {
        protocol: "https",
        hostname: "dvvjkgh94f2v6.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
