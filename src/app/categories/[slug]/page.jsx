import CrochetTypeHero from "../../../components/shared/crochet-type-hero.component";
import PostList from "../../../components/posts/post-list.component";
import { fetchCategoryBySlug } from "../../../utils/data";
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
    title: `${category.name} Articles | MellyCrochets Blog`,
    description:
      category.description ||
      `Explore our collection of ${category.name} articles and blog posts`,
    // Content classification
    keywords: [
      ...keywords,
      category.name,
      ...(
        category.posts?.slice(0, 3).map((post) => post.title.split(" ")) || []
      ).flat(),
      `${category.name} articles`,
      `${category.name} blog posts`,
    ]
      .filter(Boolean)
      .join(", "),
    slug: params.slug,
    image: `${process.env.NEXTAUTH_URL}/uploads/posts/${category?.posts[0]?.imageUrl}`,
    url: `${process.env.NEXTAUTH_URL}/categories/${params.slug}`,
    alternates: {
      canonical: `${process.env.NEXTAUTH_URL}/categories/${params.slug}`,
    },
    image: category.posts[0]?.imageUrl
      ? `/uploads/posts/${category?.posts[0].imageUrl}`
      : "/uploads/default-category.jpg",
    images:
      category?.posts?.slice(0, 3).map((post) => ({
        url: `/uploads/posts/${post.imageUrl}`,
        width: 800,
        height: 600,
        alt: post.title,
      })) || [],
    url: `${process.env.NEXTAUTH_URL}/categories/${params.slug}`,
    publishedTime: new Date(category.createdAt).toISOString(),
    modifiedTime: new Date(category.updatedAt).toISOString(),
    openGraph: {
      type: "website",
      title: `Browse ${category.name} Articles`,
      description: `Collection of ${category.posts?.length || ""} ${
        category.name
      } blog posts`,
    },
    // Twitter
    twitter: {
      card: "summary_large_image",
      title: `${category.name} Articles`,
      description: `Discover ${category.posts?.length || ""} ${
        category.name
      } blog posts`,
    },

    // Structured data
    schema: {
      collectionPage: {
        name: `${category.name} Articles`,
        description: `Collection of ${category.name} blog posts`,
        hasPart:
          category.posts?.map((post) => ({
            "@type": "BlogPosting",
            name: post.title,
            url: `${process.env.NEXTAUTH_URL}/posts/${post.slug}`,
          })) || [],
      },
    },
  });
}
export default async function IndexPage({ params }) {
  const { slug } = params;

  const category = await fetchCategoryBySlug(slug);

  return (
    <>
      <CrochetTypeHero
        title={category.name}
        description={category.description}
        breadcrumbs={[
          { title: "Posts", href: "/blog_posts" },
          { title: category.name, href: "#" },
        ]}
      />
      <div className="w-full px-10 pb-10" data-aos="fade-up">
        {/* listings */}
        <PostList posts={category?.posts} />
      </div>
    </>
  );
}
