export const TOKEN_KEY = "TOKEN_KEY";
export const USER_DATA = "USER_DATA";

export const allSizes = [
  { key: "XS", description: "Extra Small Size" },
  { key: "S", description: "Small Size" },
  { key: "M", description: "Medium Size" },
  { key: "L", description: "Large Size" },
  { key: "XL", description: "Extra Large Size" },
  { key: "XXL", description: "Double Extra Large Size" },
];
export const allColors = [
  "Black",
  "Cream White",
  "Red",
  "White",
  "Purple",
  "Orange",
  "Grey",
  "Brown",
  "Coffee Brown",
  "Yellow",
  "Navy Blue",
];

export const keywords = [
  "Crochet Fashion",
  "Handmade Crochet",
  "Crochet Crop Top",
  "Crochet Bikini",
  "Crochet Dress",
  "Crochet Bags",
  "Crochet Pullover",
  "Crochet Beachwear",
  "Stylish Crochet Outfits",
  "Eco-Friendly Crochet",
  "Custom Crochet Wear",
  "Crochet Accessories",
  "Crochet Jackets",
  "Crochet Two-Piece Sets",
  "MellyCrochets",
  "Melly Crochets",
  "Crochet Outfits",
  "Crochet Clothing",
  "Handcrafted Crochet",
  "Fashionable Crochet",
  "Trendy Crochet",
  "Unique Crochet Designs",
  "Artisan Crochet",
  "Crochet Patterns",
  "Crochet Styles",
  "Crochet Trends",
  "Crochet Techniques",
  "Crochet Inspiration",
  "Crochet Community",
  "Crochet Lovers",
  "Crochet Enthusiasts",
  "Crochet Artists",
  "Crochet Designers",
  "Crochet Creations",
  "Crochet Projects",
  "Crochet Tutorials",
  "Crochet Patterns",
  "Crochet Kits",
  "Crochet Supplies",
  "Crochet Yarn",
  "Crochet Hooks",
  "Crochet Tools",
  "Crochet Accessories",
  "Crochet Gifts",
  "Crochet Home Decor",
  "Crochet Fashion Trends",
  "Crochet Fashion Styles",
  "Crochet Fashion Inspiration",
  "Crochet Fashion Designers",
  "Crochet Fashion Brands",
  "Crochet Fashion Shows",
  "Crochet Shops",
  "Crochet Online Store",
  "Crochet Marketplace",
  "Crochet Shopping",
  "Crochet Fashion Online",
  "Crochet Fashion Boutique",
  "Crochet Fashion Collection",
  "Crochet Fashion Lookbook",
];

export const CURRENCY = {
  cfa: "CFA",
  usd: "USD",
};

export const SEOConfig = {
  title: {
    default:
      "Premium Crochet Creations - Handcrafted with Love | MellyCrochets",
    template: "%s | MellyCrochets",
  },
  openGraph: {
    description:
      "Explore a collection of handcrafted crochet outfits at MellyCrochets. Trendy, stylish, and comfortable crochet wear for every occasion.",
    images: [
      `${process.env.NEXTAUTH_URL}/uploads/crochets/crochet-dress-main.jpg`,
    ],
    url: process.env.NEXTAUTH_URL,
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  keywords: keywords.join(", "),
};
