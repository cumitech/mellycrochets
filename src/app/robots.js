export default function robots() {
  const baseUrl = process.env.NEXTAUTH_URL;
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/crochets", "/about", "/after_cares"],
      disallow: ["/dashboard/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
