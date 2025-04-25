import CrochetTypeHero from "../../../components/shared/crochet-type-hero.component";
import { TrustBadge } from "../../../components/shared/payment.component";
import CrochetDetail from "../../../components/pages/crochet/crochet-detail.component";
import { fetchCrochetBySlug } from "../../../utils/data";
import axios from "axios";
import { generatePageMetadata } from "../../../lib/metadata-generator";
import { keywords } from "../../../constants/constant";
import { API_URL_UPLOADS_CROCHETS } from "@/constants/api-url";

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
  const { slug } = params;
  if (!params?.slug) {
    console.warn("Slug is missing in params!");
    return {}; // Avoid breaking the app
  }
  const crochet = await fetchCrochetDetails(slug);
  if (!crochet) {
    return {}; // Handle the case where crochet data is not available
  }
  return generatePageMetadata({
    title: `${crochet.name} | MellyCrochets Shop`,
    description:
      crochet.description ||
      `Beautiful handmade ${crochet.name} crochet design`,
    alternates: {
      canonical: `${process.env.NEXTAUTH_URL}/crochets/${slug}`,
    },
    openGraph: {
      title: `${crochet.name} | MellyCrochets Shop`,
      description:
        crochet.description || `Handmade ${crochet.name} crochet creation`,
      url: `${process.env.NEXTAUTH_URL}/crochets/${slug}`,
      type: "product",
      images: [
        {
          url: `${API_URL_UPLOADS_CROCHETS}/${crochet.imageUrls[0]}`,
          width: 1200,
          height: 630,
          alt: `MellyCrochets ${crochet.name}`,
        },
      ],
    },
    slug,
    image: `${process.env.NEXTAUTH_URL}/uploads/crochets/${crochet.imageUrls[0]}`,
    keywords: [
      crochet.name,
      `handmade ${crochet.name}`,
      `crochet ${crochet.name}`,
      `buy ${crochet.name}`,
      "MellyCrochets shop",
      ...keywords,
    ].join(", "),
    twitter: {
      card: "summary_large_image",
      title: `${crochet.name} Products | MellyCrochets Shop`,
      description:
        crochet.description ||
        `Explore our collection of ${crochet.name} crochet designs`,
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    url: `${process.env.NEXTAUTH_URL}/crochets/${params.slug}`,
    publishedTime: new Date(crochet.createdAt).toISOString(),
    modifiedTime: new Date(crochet.updatedAt).toISOString(),
  });
}

export default async function IndexPage({ params }) {
  const { slug } = params;
  const crochet = await fetchCrochetBySlug(slug);

  return (
    <>
      <CrochetTypeHero
        title={crochet.name}
        description={crochet.description}
        breadcrumbs={[
          { title: "Shop", href: "/shop" },
          { title: crochet.name, href: "#" },
        ]}
      />

      {/* details */}
      <CrochetDetail crochet={crochet} />

      <TrustBadge />
    </>
  );
}
