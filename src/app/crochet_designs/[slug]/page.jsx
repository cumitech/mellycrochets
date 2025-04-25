import CrochetList from "../../../components/crochet/crochet-list.component";
import CrochetTypeHero from "../../../components/shared/crochet-type-hero.component";
import { API_URL, BASE_URL } from "../../../constants/api-url";
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
  const { slug } = params;
  const url = process.env.NEXTAUTH_URL || "https://mellycrochets.shop";
  if (!params?.slug) {
    console.warn("Slug is missing in params!");
    return {}; // Avoid breaking the app
  }
  const crochetType = await fetchCrochetTypeDetails(slug);
  if (!crochetType) {
    return {}; // Handle the case where crochetType data is not available
  }
  return generatePageMetadata({
    title: `${crochetType.name} | MellyCrochets Shop`,
    description:
      crochetType.description ||
      `Beautiful handmade ${crochetType.name} crochet designs by MellyCrochets`,
    alternates: {
      canonical: `${url}/crochet_designs/${slug}`,
    },
    slug,
    image: `${process.env.NEXTAUTH_URL}/uploads/crochets/${crochetType.crochets[0].imageUrls[0]}`,
    keywords: [
      crochetType.name,
      `handmade ${crochetType.name}`,
      `crochet ${crochetType.name}`,
      `buy ${crochetType.name} crochet`,
      "MellyCrochets shop",
      ...keywords,
    ].join(", "),
    openGraph: {
      title: `${crochetType.name} | MellyCrochets Shop`,
      description:
        crochetType.description ||
        `Handmade ${crochetType.name} crochet creations`,
      url: `${url}/crochet_designs/${slug}`,
      type: "website",
      images: [
        {
          url: crochetType.image || `${url}/uploads/default-crochet.jpg`,
          width: 1200,
          height: 630,
          alt: `MellyCrochets ${crochetType.name} collection`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${crochetType.name} Products | MellyCrochets Shop`,
      description:
        crochetType.description ||
        `Explore our collection of ${crochetType.name} crochet designs`,
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    url: `${process.env.NEXTAUTH_URL}/crochet_desigsn/${params.slug}`,
    publishedTime: new Date(crochetType.createdAt).toISOString(),
    modifiedTime: new Date(crochetType.updatedAt).toISOString(),
  });
}

export default async function Page({ params }) {
  const { slug } = params;

  const res = await axios.get(
    `${API_URL}${BASE_URL}/crochet_types/slugs/${slug}`,
    {
      cache: "no-store",
      method: "GET",
    }
  );

  if (res.status !== 200) {
    throw new Error("Failed to fetch crochet type");
  }

  const { data } = res;
  return (
    <>
      <CrochetTypeHero
        title={data.name}
        description={data.description}
        breadcrumbs={[
          { title: "Crochet Designs", href: "/shop" },
          { title: data.name, href: `#` },
        ]}
      />
      <div className="w-full px-10 pb-10">
        <CrochetList crochets={data?.crochets} />
      </div>
    </>
  );
}
