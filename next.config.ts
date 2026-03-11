import type { NextConfig } from "next";

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

const nextConfig: NextConfig = {
  images: {
    // Serve image URLs directly instead of routing through Next.js optimization endpoint.
    // This avoids image optimization function traffic on Vercel.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Icons and other assets under /public/images are static and can be cached aggressively.
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${ONE_YEAR_IN_SECONDS}, s-maxage=${ONE_YEAR_IN_SECONDS}, immutable`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
