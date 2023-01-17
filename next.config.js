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

const ContentSecurityPolicy = `
  default-src 'self';
  `

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'microphone=(), geolocation=(), camera=()',
  }
]

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
  async headers () {
    return [
      {
        // Apply these to all routes in your application
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  ...nextConfig,
});
