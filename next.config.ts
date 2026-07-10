import type { NextConfig } from "next";

// Static export so the site can be served from GitHub Pages.
// NEXT_PUBLIC_BASE_PATH is set by the deploy workflow (e.g. "/sierra_website");
// locally it is empty and the site runs at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
};

export default nextConfig;
