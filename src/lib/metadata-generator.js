export const generatePageMetadata = ({
  title = "Handmade Crochet Item - Buy Unique Designs",
  description = "Discover unique handmade crochet products crafted with love. Shop now for the best crochet designs.",
  slug,
  image = "/uploads/crochets/crochet-dress-main.jpg", // More relevant default image
  keywords = "crochet, handmade, knitting, unique designs, custom crochet",
  type = "product", // Changed default to "product" for better e-commerce SEO
  publishedTime,
  modifiedTime,
}) => {
  const baseUrl = process.env.NEXTAUTH_URL;
  const url = `${baseUrl}/crochets/${slug}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: "website",
      title,
      description,
      url,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
      siteName: "MellyCrochets",
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "Website",
      name: title,
      description,
      url,
      image,
      ...(publishedTime && { datePublished: publishedTime }),
      ...(modifiedTime && { dateModified: modifiedTime }),
      brand: {
        "@type": "Brand",
        name: "MellyCrochets",
      },
    },
  };
};
