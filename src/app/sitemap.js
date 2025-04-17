import axios from "axios";

export default async function sitemap() {
  const baseUrl = process.env.NEXTAUTH_URL || "https://mellycrochets.shop";

  // Fetch both crochets and blog posts in parallel
  const [crochetsResponse, blogsResponse] = await Promise.all([
    axios.get(`${baseUrl}/api/crochets`),
    axios.get(`${baseUrl}/api/posts`),
  ]);

  const crochets = crochetsResponse.data;
  const blogs = blogsResponse.data;

  // Generate crochet URLs
  const crochetsData = crochets?.map((crochet) => ({
    url: `${baseUrl}/crochets/${crochet?.slug}`,
    lastModified: new Date(crochet?.updatedAt || crochet?.createdAt),
    changeFrequency: "weekly",
    priority: 0.8,
    images: crochet?.imageUrls?.map((imageUrl) => ({
      url: `${baseUrl}/uploads/crochets/${imageUrl}`,
      alt: crochet?.name,
    })),
  }));

  // Generate blog URLs
  const blogsData = blogs?.map((blog) => ({
    url: `${baseUrl}/blog_posts/${blog?.slug}`,
    lastModified: new Date(blog?.updatedAt || blog?.createdAt),
    changeFrequency: "monthly",
    priority: 0.7,
    images: blog?.imageUrl
      ? [
          {
            url: `${baseUrl}/uploads/posts/${blog?.imageUrl}`,
            alt: blog?.title,
          },
        ]
      : [],
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Static pages
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog_posts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Dynamic content
    ...crochetsData,
    ...blogsData,
  ];
}
