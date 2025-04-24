export default function robots() {
  const baseUrl = process.env.NEXTAUTH_URL || "https://mellycrochets.shop";
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/crochets/*",
        "/blog_posts/*",
        "/about",
        "/shop",
        "/contact",
        "/privacy",
        "/feed.xml", // optional
        "/rss.xml",  // optional
      ],
      disallow: [
        "/dashboard/*",
        "/api/*",
        "/admin/*",
        "/checkout/*",
        "/cart*",
        "/account/*",
        "/private-*",
        "/404", // optional
      ],
      crawlDelay: 10,
      cleanParam: "ref,utm_source,utm_medium,utm_campaign,sessionid",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}