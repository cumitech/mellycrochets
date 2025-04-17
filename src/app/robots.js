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
      ],
      disallow: [
        "/dashboard/*",
        "/api/*",
        "/admin/*",
        "/checkout/*",
        "/cart",
        "/account/*",
        "/private-*",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
    crawlDelay: 10, // Recommended for shared hosting
  };
}
