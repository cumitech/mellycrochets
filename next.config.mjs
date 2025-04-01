/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = withNextIntl({
  transpilePackages: ["@refinedev/antd"],
  productionBrowserSourceMaps: false,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
    ],
  },
  crossOrigin: "anonymous",
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
  webpack(config) {
    config.optimization.splitChunks = {
      chunks: "all", // Improve code splitting
    };
    return config;
  },
});

export default nextConfig;
