import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add other Next.js config options here if needed
  serverExternalPackages: ['@payloadcms/db-mongodb', 'mongodb'],
  output: 'standalone',
}

export default withPayload(nextConfig)
