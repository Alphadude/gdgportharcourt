/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow images from Google Cloud Storage CDN used by the live DevFest Lagos site
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/devfestlagos2025/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "**.bitnob.com",
      },
      {
        protocol: "https",
        hostname: "getcleva.com",
      },
      {
        protocol: "https",
        hostname: "alat.ng",
      },
      {
        protocol: "https",
        hostname: "cadana.io",
      },
      {
        protocol: "https",
        hostname: "**.monnify.com",
      },
      {
        protocol: "https",
        hostname: "sdk.monnify.com",
      },
      {
        protocol: "https",
        hostname: "gdg.community.dev",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
