import { Card, Divider, Tag, Space } from "antd";
import { API_URL_UPLOADS_POSTS } from "../../../constants/api-url";
import CrochetTypeHero from "../../../components/shared/crochet-type-hero.component";
import Link from "next/link";
import { CiFolderOn } from "react-icons/ci";
import PostComments from "../../../components/comment/comment.component";
import {
  fetchCategories,
  fetchLatestPosts,
  fetchPostBySlug,
  fetchTags,
} from "../../../utils/data";

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
    title: `${post.title} | MellyCrochets Blog`,
    description: post.summary || `Read this post about ${post.title}`,
    keywords: [
      ...keywords,
      ...(post.tags?.map((tag) => tag.name) || []),
      post.category?.name || "",
    ]
      .filter(Boolean)
      .join(", "),
    url: `/blog_posts/${params.slug}`,
    alternates: {
      canonical: `/blog_posts/${params.slug}`,
    },
    slug: params.slug,
    image: `${process.env.NEXTAUTH_URL}/uploads/posts/${post.imageUrl}`,
    images: [
      {
        url: `${process.env.NEXTAUTH_URL}/uploads/posts/${post.imageUrl}`,
        width: 1200,
        height: 630,
        alt: post.title,
      },
    ],
    // Article specific
    type: "article",
    authors: post.user ? [post.user.email] : undefined,
    url: `${process.env.NEXTAUTH_URL}/posts/${params.slug}`,
    publishedTime: new Date(post.createdAt).toISOString(),
    modifiedTime: new Date(post.updatedAt).toISOString(),
    // OpenGraph
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: new Date(post.createdAt).toISOString(),
      modifiedTime: new Date(post.updatedAt).toISOString(),
      tags: post.tags?.map((tag) => tag.name) || [],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [`/uploads/posts/${post.imageUrl}`],
    },

    // Article schema
    schema: {
      article: {
        publishedTime: new Date(post.createdAt).toISOString(),
        modifiedTime: new Date(post.updatedAt).toISOString(),
        authors: post.author ? [post.author.name] : undefined,
        tags: post.tags?.map((tag) => tag.name) || [],
      },
    },
  });
}

export default async function IndexPage({ params }) {
  // Fetch data on server
  const [post, categories, tags, latestPosts] = await Promise.all([
    fetchPostBySlug(params.slug),
    fetchCategories(),
    fetchTags(),
    fetchLatestPosts(),
  ]);
  return (
    <>
      <CrochetTypeHero
        title={"Post Details"}
        description={post.title}
        breadcrumbs={[
          { title: "Posts", href: "/blog_posts" },
          { title: "Details", href: "#" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Post Content */}
        <div className="lg:col-span-2">
          <Card
            cover={
              <img
                src={`${API_URL_UPLOADS_POSTS}/${post.imageUrl}`}
                alt={post.title}
                className="rounded-t-xl object-cover w-full"
              />
            }
            className="rounded-xl"
            variant="borderless"
          >
            <>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <Divider />
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              <Divider />
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <Tag
                    key={tag.id}
                    color="#ffe3e2"
                    style={{ color: "#333", fontWeight: 500 }}
                  >
                    {tag.name.toUpperCase()}
                  </Tag>
                ))}
              </div>
            </>
          </Card>
        </div>

        {/* Sidebar */}
        <Space direction="vertical" size={"small"} className="space-y-6">
          {/* Latest Posts */}
          <Card
            variant="borderless"
            size="small"
            title="Latest Posts"
            className="rounded-xl shadow-sm"
          >
            <ul className="space-y-2">
              {latestPosts.map((p) => (
                <li key={p.id}>
                  <Link href={`/blog_posts/${p.slug}`}>
                    {p.title.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </Card>

          {/* Categories */}
          <Card
            variant="borderless"
            size="small"
            title="Categories"
            className="rounded-xl shadow-sm"
          >
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    style={{
                      marginBottom: 5,
                    }}
                    href={`/categories/${cat.slug}`}
                  >
                    <Space style={{ columnGap: 2 }}>
                      <CiFolderOn size={20} /> {cat.name.toUpperCase()}
                    </Space>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>

          {/* Tags */}
          <Card
            variant="borderless"
            size="small"
            title="Tags"
            className="rounded-xl shadow-sm"
          >
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link key={tag.id} href={`/tags/${tag.slug}`}>
                  <Tag
                    size="large"
                    color="#ffe3e2"
                    style={{ color: "#333", fontWeight: 500 }}
                  >
                    {tag.name.toUpperCase()}
                  </Tag>
                </Link>
              ))}
            </div>
          </Card>
        </Space>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PostComments postId={post.id} />
      </div>
    </>
  );
}
