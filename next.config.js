/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  workerThreads: false,
  cpus: 1
}

module.exports = nextConfig
