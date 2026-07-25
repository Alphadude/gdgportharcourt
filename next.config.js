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
  },
};

module.exports = nextConfig;
