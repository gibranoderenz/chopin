/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "www.ui.ac.id" },
      { hostname: "media.cntraveler.com" },
    ],
  },
};

export default nextConfig;
