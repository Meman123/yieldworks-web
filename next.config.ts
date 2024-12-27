import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ayuda a detectar errores en el desarrollo
  webpack: (config) => {
    config.infrastructureLogging = { level: "verbose" }; // Logs detallados en desarrollo
    return config;
  },
};

export default nextConfig;
