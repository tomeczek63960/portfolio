/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    // The locales you want to support in your app
    locales: ["en", "pl"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
    localeDetection: false
  },
  async rewrites() {
    return [
      {
        source: '/pl/kontakt',
        destination: '/pl/contact',
        locale: false // Use `locale: false` so that the prefix matches the desired locale correctly
      },
      {
        source: '/pl/show',
        destination: '/pl/show-case',
        locale: false
      }
    ]
  }
};

module.exports = nextConfig
