/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withBundle = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

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
    optimizeCss: true,
  },
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  webpack(config, { isServer, dev }) {
    // Add pg-hstore fallback
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        "pg-hstore": false,
      },
    };

    if (!dev) {
      config.optimization.minimize = true;
      config.optimization.splitChunks = {
        chunks: "all",
      };
    }

    return config;
  },
});

export default withBundle(nextConfig);
