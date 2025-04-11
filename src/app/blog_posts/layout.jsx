import { keywords } from "../../constants/constant";

export const metadata = {
  metadataBase: new URL(`${process.env.NEXTAUTH_URL}`),
  keywords: ["crochet blog", "crochet patterns", "crochet tutorials", ...keywords].join(", "),
  title: {
    default: "Crochet Blog - Tips, Patterns & Inspiration | MellyCrochets",
    template: "%s | MellyCrochets Blog",
  },
  alternates: {
    canonical: `${process.env.NEXTAUTH_URL}/blog_posts`,
  },
  openGraph: {
    title: "Crochet Blog - Tips, Patterns & Inspiration",
    description: "Discover crochet patterns, tutorials, and creative inspiration from MellyCrochets. Perfect for crochet enthusiasts of all skill levels.",
    images: [
      {
        url: `${process.env.NEXTAUTH_URL}/uploads/posts/anastasia-shchukina-V_zqT-zXud0-unsplash.jpg`,
        width: 1200,
        height: 630,
        alt: "Crochet blog header image",
      },
    ],
    url: `${process.env.NEXTAUTH_URL}/blog_posts`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crochet Blog - Tips, Patterns & Inspiration | MellyCrochets",
    description: "Discover crochet patterns, tutorials, and creative inspiration from MellyCrochets.",
    images: [`${process.env.NEXTAUTH_URL}/uploads/posts/christian-bass-EgBvK_nNqg8-unsplash.jpg`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};
export default function Layout({ children }) {
  return <>{children}</>;
}
