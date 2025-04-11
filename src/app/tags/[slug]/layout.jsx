import axios from "axios";
import { generatePageMetadata } from "../../../lib/metadata-generator";
import { keywords } from "../../../constants/constant";

const fetchTagDetails = async (slug) => {
  const response = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/tags/slugs/${slug}`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch tag details");
  } else {
    return await response.data;
  }
};

// 🏷️ Generate Metadata for SEO
export async function generateMetadata({ params }) {
  if (!params?.slug) {
    console.warn("Slug is missing in params!");
    return {}; // Avoid breaking the app
  }
  const tag = await fetchTagDetails(params.slug);
  if (!tag) {
    return {}; // Handle the case where tag data is not available
  }
  return generatePageMetadata({
    title: tag.name,
    description: "Blog " + tag.name,
    slug: params.slug,
    image: `${process.env.NEXTAUTH_URL}/uploads/posts/${tag.posts[0].imageUrl}`,
    keywords: keywords.join(", "),
    url: `${process.env.NEXTAUTH_URL}/tags/${params.slug}`,
    publishedTime: new Date(tag.createdAt).toISOString(),
    modifiedTime: new Date(tag.updatedAt).toISOString(),
  });
}
export default function Layout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
