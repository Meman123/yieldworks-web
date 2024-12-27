import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Detecta errores en desarrollo
  experimental: {
    turbo: {}, // Activa Turbopack sin configuración adicional (opcional)
  },
  webpack: (config) => {
    config.infrastructureLogging = { level: "verbose" }; // Logs detallados
    return config;
  },
};

export default nextConfig;
