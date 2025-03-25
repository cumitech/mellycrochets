import axios from "axios";
import { generatePageMetadata } from "../../../lib/metadata-generator";
import { BASE_URL } from "../../../constants/api-url";
import { keywords } from "../../../constants/constant";

const fetchCrochetDetails = async (slug) => {
  const response = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/crochets/slugs/${slug}`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch crochet details");
  } else {
    return await response.data;
  }
};

// 🏷️ Generate Metadata for SEO
export async function generateMetadata({ params }) {
  console.log("params: ", params);
  if (!params?.slug) {
    console.warn("Slug is missing in params!");
    return {}; // Avoid breaking the app
  }
  const crochet = await fetchCrochetDetails(params.slug);
  if (!crochet) {
    return {}; // Handle the case where crochet data is not available
  }
  return generatePageMetadata({
    title: crochet.title,
    description: crochet.description,
    slug: params.slug,
    image: `${process.env.NEXTAUTH_URL}/uploads/crochets/${crochet.imageUrls[0]}`,
    keywords: keywords,
    publishedTime: new Date(crochet.createdAt).toISOString(),
    modifiedTime: new Date(crochet.updatedAt).toISOString(),
  });
}
export default async function Layout({ children }) {
  return <>{children}</>;
}
