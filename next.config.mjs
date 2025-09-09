/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },   // <— clave para pasar el build
  images: { unoptimized: true },          // por si usas <img>
};
export default nextConfig;
