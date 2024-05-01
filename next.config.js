/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["images.ctfassets.net"],
    remotePatterns : [
      {
        protocol : 'https',
        hostname : "images.ctfassets.net",
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
};

module.exports = nextConfig;
