import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.stripe.com",
      },
    ]
  },
  
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
