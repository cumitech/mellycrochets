import { keywords } from "../../constants/constant";

export const metadata = {
  metadataBase: new URL(`${process.env.NEXTAUTH_URL}`),
  keywords: [
    "crochet shop",
    "handmade crochet",
    "crochet clothing",
    "crochet accessories",
    "crochet fashion",
    ...keywords,
  ].join(", "),
  title: {
    default: "MellyCrochets Shop - Handmade Crochet Fashion & Accessories",
    template: "%s | MellyCrochets Shop",
  },
  alternates: {
    canonical: `${process.env.NEXTAUTH_URL}/shop`,
  },
  openGraph: {
    title: "MellyCrochets Shop - Unique Handmade Crochet Creations",
    description:
      "Discover our collection of beautifully handmade crochet clothing, accessories, and home decor. Ethically crafted, sustainable fashion for every style.",
    images: [
      {
        url: `${process.env.NEXTAUTH_URL}/uploads/shop/diasy-crochet-trousers.jpg`,
        width: 1200,
        height: 630,
        alt: "MellyCrochets shop featuring various crochet products",
      },
    ],
    url: `${process.env.NEXTAUTH_URL}/shop`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MellyCrochets Shop - Handmade Crochet Fashion",
    description:
      "Shop unique, handmade crochet pieces - from clothing to accessories. Sustainable fashion with love.",
    images: [
      `${process.env.NEXTAUTH_URL}/uploads/crochets/diasy-crochet-trousers.jpg`,
      `${process.env.NEXTAUTH_URL}/uploads/crochets/granny-sq-cropped-top-4.jpg`,
      `${process.env.NEXTAUTH_URL}/uploads/crochets/cameroon.jpg`,
    ],
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
