/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "muygxwpxsumabodotkmb.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/yoga/**",
      },
    ],
  },
};

export default nextConfig;
