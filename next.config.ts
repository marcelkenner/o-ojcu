import type { NextConfig } from "next";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.md": {
        loaders: [require.resolve("./scripts/markdown-raw-loader.cjs")],
        as: "*.js",
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });

    return config;
  },
};

export default nextConfig;
