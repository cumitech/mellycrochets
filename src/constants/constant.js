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
  "Handmade Crochet",
  "Crochet Fashion",
  "Custom Crochet Wear",
  "Crochet Dresses",
  "Crochet Bikinis",
  "Crochet Crop Tops",
  "Crochet Two-Piece Sets",
  "Crochet Bralettes",
  "Crochet Cover-Ups",
  "Crochet Loungewear",
  "Crochet Maxi Dresses",
  "Crochet Midi Dresses",
  "Crochet Mini Dresses",
  "Crochet Co-Ord Sets",
  "Crochet Cardigans",
  "Crochet Pullover",
  "Crochet Jumpsuits",
  "Crochet Rompers",
  "Crochet Skirts",
  "Crochet Shorts",
  "Crochet Bags",
  "Crochet Purses",
  "Crochet Earrings",
  "Crochet Accessories",
  "Crochet Outfits",
  "Stylish Crochet Clothing",
  "Trendy Crochet Designs",
  "Boho Crochet Fashion",
  "Beach Crochet Wear",
  "Crochet Summer Collection",
  "MellyCrochets",
  "MellyCrochets Official",
  "Buy Crochet Online",
  "Affordable Crochet Fashion",
  "Handmade Crochet for Sale",
  "Custom Crochet Orders",
  "Crochet Fashion for Women",
  "Eco-Friendly Crochet",
  "Artisan Crochet",
  "Unique Crochet Designs",
  "Crochet Boutique",
  "Crochet Online Store",
  "Crochet Marketplace",
  "Crochet Fashion Blog",
  "Crochet Trends",
  "Crochet Style Tips",
  "Crochet Lookbook",
  "Crochet Inspiration",
  "Bamenda Crochet Fashion",
  "Cameroon Handmade Fashion",
  "Crochet Craftsmanship",
  "Crochet Gifts",
  "Crochet Community",
  "Crochet Lovers",
  "Crochet Enthusiasts",
  "MellyCrochets Collection",
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
