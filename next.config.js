const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer({
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: "https://twitter.com/cjdunteman",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/cjdunteman",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/cjdunteman",
        permanent: true,
      },
    ];
  },
  ...nextConfig,
});
