const withImages = require("next-images");
module.exports = withImages();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    // The locales you want to support in your app
    locales: ["en", "pl"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
    localeDetection: false,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/pl/kontakt",
  //       destination: "/pl/contact",
  //       locale: false, // Use `locale: false` so that the prefix matches the desired locale correctly
  //     },
  //     {
  //       source: "/pl/show",
  //       destination: "/pl/show-case",
  //       locale: false,
  //     },
  //     {
  //       source: "/pl/doswiadczenie",
  //       destination: "/pl/experience",
  //       locale: false,
  //     },
  //   ];
  // },
  images: {
    // domains: ["localhost"],
    // domains: ["localhost", "portfoliobe-production.up.railway.app"],
    domains: ["localhost", "portfoliobe-production.up.railway.app"],
    // domains: ["https://portfoliobe-production.up.railway.app/"],
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: 'localhost',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
};

module.exports = nextConfig;
