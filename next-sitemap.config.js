module.exports = {
  siteUrl: process.env.SITE_URL || "https://links.jeffersonrj.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
