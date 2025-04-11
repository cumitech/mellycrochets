import axios from "axios";
import { generatePageMetadata } from "../../../lib/metadata-generator";
import { keywords } from "../../../constants/constant";

const fetchPostDetails = async (slug) => {
  const response = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/posts/slug/${slug}`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch post details");
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
  const post = await fetchPostDetails(params.slug);
  if (!post) {
    return {}; // Handle the case where post data is not available
  }
  return generatePageMetadata({
    title: post.title,
    description: post.summary,
    slug: params.slug,
    image: `${process.env.NEXTAUTH_URL}/uploads/posts/${post.imageUrl}`,
    keywords: keywords.join(", "),
    url: `${process.env.NEXTAUTH_URL}/posts/${params.slug}`,
    publishedTime: new Date(post.createdAt).toISOString(),
    modifiedTime: new Date(post.updatedAt).toISOString(),
  });
}
export default function Layout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
