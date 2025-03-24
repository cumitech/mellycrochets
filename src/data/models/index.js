const emptyCartItem = {
  id: "",
  crochetId: "",
  sizeId: "",
  userId: "",
  quantity: 0,
  total: 0,
  price: 0,
  colors: [],
};

const emptyCrochetType = {
  id: "",
  name: "",
  slug: "",
  description: "",
};

const emptyOrderItem = {
  crochetId: "",
  orderId: "",
  qtty: 0,
  price: 0.0,
};

const emptyOrder = {
  id: "",
  userId: "",
  totalQtty: 0,
  discount: 0,
  totalAmount: 0.0,
  orderNo: "",
  username: "",
  address: "",
  email: "",
  cellPhone: "",
  status: "",
};

const emptyPayment = {
  id: "",
  userId: "",
  orderId: "",
  orderNo: "",
  amount: 0.0,
  address: "",
  email: "",
  cellPhone: "",
  status: "",
};

const emptyCrochet = {
  id: "", // Empty string for ID
  name: "",
  slug: "",
  description: "",
  crochetTypeId: "",
  imageUrls: [], // Empty array for images
  price: 0.0, // Default price
  createdAt: new Date().toISOString(), // Current timestamp
  updatedAt: new Date().toISOString(),
};

const emptyCrochetSize = {
  id: "", // Empty string for ID
  crochetId: "",
  sizeId: null, // Nullable
  colors: [], // Empty array for colors
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};
const emptyMedia = {
  id: "",
  title: "",
  slug: "",
  imageUrl: "",
};
const emptyUser = {
  id: "",
  email: "",
  username: "",
  image: "",
  password: "",
  provider: "",
  phone: "",
  role: "",
  verified: false,
};

const emptyRole = {
  id: "",
  name: "",
};

const emptySubscriber = {
  id: "",
  email: "",
};

const emptyReview = {
  id: "",
  userId: "",
  crochetId: "",
  comment: "",
  rating: 0,
  toggle: false,
};

const emptyAfterCare = {
  id: "",
  slug: "",
  title: "",
  videoUrl: "",
  description: "",
};

const emptySize = {
  id: "",
  label: "",
};

const emptyPost = {
  id: "",
  title: "",
  summary: "",
  slug: "",
  content: "",
  imageUrl: "",
  readTime: "",
  publishedAt: null,
  authorId: "",
  crochetTypeId: "",
};

export {
  emptyCrochetSize,
  emptyCartItem,
  emptyCrochetType,
  emptyOrderItem,
  emptyOrder,
  emptyPayment,
  emptyCrochet,
  emptyMedia,
  emptyUser,
  emptyRole,
  emptyReview,
  emptySubscriber,
  emptyAfterCare,
  emptySize,
  emptyPost,
};
