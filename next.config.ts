import type { NextConfig } from "next";
import redirects from "./lib/redirects.json";

const nextConfig: NextConfig = {
  // The designs link with trailing slashes (/about/, /products/certysign/ …)
  trailingSlash: true,
  // The ported Stitch scripts attach DOM listeners; StrictMode's dev-only double mount would attach them twice.
  reactStrictMode: false,
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
