/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },

  experimental: {
    optimizePackageImports: ['@react-three/fiber', '@react-three/drei', 'lucide-react'],
  },

  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig