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
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules\/(?!sequelize)/,
      },
    ],
  },
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
    config.optimization.splitChunks = {
      chunks: "all", // Improve code splitting
    };
    return config;
  },
  env: {
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_PORT: process.env.MYSQL_PORT,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  },
});

export default nextConfig;
