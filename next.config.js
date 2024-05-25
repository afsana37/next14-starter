/** @type {import('next').NextConfig} */
let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true
const repo = "next14-starter";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;
const nextConfig = {
    trailingSlash: true,
    output: process.env.NODE_ENV !== "production" ? undefined: "export",
    basePath: basePath,
    assetPrefix: assetPrefix,
    images:{
      unoptimized: envImageUnoptimize,
      remotePatterns:[
        {
          protocol: 'https',
          hostname: "images.pexels.com"
        }
      ]
    }
  }
  
  module.exports = nextConfig
