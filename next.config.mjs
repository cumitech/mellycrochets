/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = withNextIntl({
  transpilePackages: ["@refinedev/antd"],
  // output: "standalone",
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
  ignoreWarnings: [
    {
      message:
        /Critical dependency: the request of a dependency is an expression/,
    },
  ],
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
  webpack(config) {
    // config.module.rules.push({
    //   test: /\.js$/,
    //   use: "babel-loader",
    //   exclude: /node_modules\/(?!sequelize)/,
    // });
    config.optimization.splitChunks = {
      chunks: "all", // Improve code splitting
    };
    return config;
  },
});

export default nextConfig;
