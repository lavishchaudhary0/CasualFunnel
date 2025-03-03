/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SHOPIFY_APP_URL: process.env.SHOPIFY_APP_URL,
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
    SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
}
