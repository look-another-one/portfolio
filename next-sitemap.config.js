/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nvmpratyush.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  changefreq: "monthly",
  priority: 0.8,
  sitemapSize: 7000,
};
