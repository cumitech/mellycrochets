import axios from "axios";
import { generatePageMetadata } from "../../../lib/metadata-generator";
import { keywords } from "../../../constants/constant";

const fetchCrochetTypeDetails = async (slug) => {
  const response = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/crochet_types/slugs/${slug}`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch crochetType details");
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
  const crochetType = await fetchCrochetTypeDetails(params.slug);
  if (!crochetType) {
    return {}; // Handle the case where crochetType data is not available
  }
  return generatePageMetadata({
    title: crochetType.name,
    description: crochetType.description,
    slug: params.slug,
    image: `${process.env.NEXTAUTH_URL}/uploads/crochets/${crochetType.crochets[0].imageUrls[0]}`,
    keywords: keywords.join(", "),
    url: `${process.env.NEXTAUTH_URL}/crochet_desigsn/${params.slug}`,
    publishedTime: new Date(crochetType.createdAt).toISOString(),
    modifiedTime: new Date(crochetType.updatedAt).toISOString(),
  });
}
export default function Layout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
