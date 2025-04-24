export const TOKEN_KEY = "TOKEN_KEY";
export const USER_DATA = "USER_DATA";
export const CART_KEY = "guest_cart";

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
  "MellyCrochets",
  "Melly Crochets Shop",
  "MellyCrochets Official",
  "MellyCrochets Store",
  "MellyCrochets Fashion",
  "MellyCrochets Collection",
  "MellyCrochets Outfits",
  "MellyCrochets Dresses",
  "MellyCrochets Bikinis",
  "MellyCrochets Accessories",
  "Crochet Fashion",
  "Handmade Crochet",
  "Crochet Crop Top",
  "Crochet Bikini",
  "Crochet Dress",
  "Crochet Bags",
  "Crochet Pullover",
  "Crochet Beachwear",
  "Crochet Jackets",
  "Crochet Two-Piece Sets",
  "Crochet Outfits",
  "Crochet Clothing",
  "Custom Crochet Wear",
  "Eco-Friendly Crochet",
  "Stylish Crochet Outfits",
  "Trendy Crochet Clothing",
  "Unique Crochet Designs",
  "Artisan Crochet",
  "Crochet Accessories",
  "Crochet Gifts",
  "Crochet Home Decor",
  "Crochet Patterns",
  "Crochet Kits",
  "Crochet Supplies",
  "Crochet Yarn",
  "Crochet Hooks",
  "Crochet Tools",
  "Crochet Tutorials",
  "DIY Crochet Projects",
  "Crochet Fashion Blog",
  "Crochet Style Tips",
  "Crochet Trends",
  "Crochet Lookbook",
  "Sustainable Crochet Fashion",
  "Crochet Fashion Inspiration",
  "Crochet Designers",
  "Crochet Artists",
  "Crochet Community",
  "Crochet Enthusiasts",
  "Crochet Lovers",
  "Crochet Creations",
  "MellyCrochets",
  "Melly Crochets",
  "Buy Crochet Online",
  "Crochet Online Store",
  "Crochet Fashion Boutique",
  "Crochet Fashion Collection",
  "Crochet Marketplace",
  "Crochet Shopping",
  "Handmade Crochet for Sale",
  "Custom Crochet Orders",
  "Crochet Fashion for Women",
  "Affordable Crochet Clothing",
  "Beach Wear",
  "Crochet Blog Posts",
  "Crochet Crafting Tips",
  "Crochet E-commerce",
  "Best Crochet Online Store",
  "Crochet Boutique Near Me",
  "Crochet Tutorials",
  "Crochet Techniques",
  "Crochet Yarn Guide",
  "Crochet Hook Sizes",
  "Crochet Stitch Patterns",
  "Crochet Dresses",
  "Handmade Crochet Bikinis",
  "Crochet Crop Tops",
  "Crochet Trousers",
  "Crochet Earrings",
  "Crochet Two-Piece Sets",
  "Crochet Jumpsuits",
  "Crochet Rompers",
  "Crochet Mini Dresses",
  "Crochet Midi Dresses",
  "Crochet Maxi Dresses",
  "Crochet Co-Ord Sets",
  "Crochet Loungewear",
  "Crochet Cardigans",
  "Crochet Cover-Ups",
  "Crochet Bralettes",
  "Crochet Skirts",
  "Crochet Shorts",
  "Crochet Bags",
  "Crochet Purses",
  "Crochet Home Decor",
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

export const ORDER_STATUS = {
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
  CONFIRMED: "CONFIRMED",
  SHIPPED: "SHIPPED",
  DELIVERED: "DELIVERED",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
  REFUNDED: "REFUNDED",
  PAID: "PAID", // Payment received
};

export const PAYMENT_STATUS = {
  SUCCESS: "SUCCESS", // Payment completed successfully
  FAILED: "FAILED", // Payment failed
  CANCELLED: "CANCELLED", // User or system cancelled the payment
  REFUNDED: "REFUNDED", // Payment refunded back to the user
};
