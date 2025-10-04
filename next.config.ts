import type { NextConfig } from "next";

const repoName = "/weather-app"; 

const nextConfig: NextConfig = {
  basePath: repoName,
  assetPrefix: repoName,
  reactStrictMode: true,
  output: "export", 
};

export default nextConfig;
