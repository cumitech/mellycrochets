import axios from "axios";
import { generatePageMetadata } from "../../../lib/metadata-generator";
import { keywords } from "../../../constants/constant";

const fetchCategoryDetails = async (slug) => {
  const response = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/categories/slugs/${slug}`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch category details");
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
  const category = await fetchCategoryDetails(params.slug);
  if (!category) {
    return {}; // Handle the case where category data is not available
  }
  return generatePageMetadata({
    title: category.name,
    description: "Blog " + category.name,
    slug: params.slug,
    image: `${process.env.NEXTAUTH_URL}/uploads/posts/${category.posts[0].imageUrl}`,
    keywords: keywords.join(", "),
    url: `${process.env.NEXTAUTH_URL}/categories/${params.slug}`,
    publishedTime: new Date(category.createdAt).toISOString(),
    modifiedTime: new Date(category.updatedAt).toISOString(),
  });
}
export default function Layout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
