/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.themealdb.com'],
  },
  env: {
    FIND_PHP_URL: 'https://www.themealdb.com/api/json/v1/1/lookup.php'
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
