/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseURL: "http://localhost:8000/api/next",
  },
};

module.exports = nextConfig;
