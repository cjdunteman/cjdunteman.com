const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
      }
    ]
  }
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
        destination: "https://linkedin.com/in/cjdunteman",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/cjdunteman",
        permanent: true,
      },
      {
        source: "/live",
        destination: "https://twitch.tv/cliffj",
        permanent: true,
      },
    ];
  },
  ...nextConfig,
});
