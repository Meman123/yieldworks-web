import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export", // Activa el modo de exportación estática
  images: { unoptimized: true }, // Cloudflare Pages no usa next/image
};

export default nextConfig;
