const sequelize = require("../../database/db-sequelize.config");
const { DataTypes } = require("sequelize");

const User = require("./user")(sequelize, DataTypes);
const Media = require("./media")(sequelize, DataTypes);
const CrochetType = require("./crochet-type")(sequelize, DataTypes);
const Category = require("./category")(sequelize, DataTypes);
const Crochet = require("./crochet")(sequelize, DataTypes);
const Role = require("./role")(sequelize, DataTypes);
const Order = require("./order")(sequelize, DataTypes);
const OrderItem = require("./order-item")(sequelize, DataTypes);
const Payment = require("./payment")(sequelize, DataTypes);
const Review = require("./review")(sequelize, DataTypes);
const CartItem = require("./cart-item")(sequelize, DataTypes);
const Subscriber = require("./subscriber")(sequelize, DataTypes);
const Post = require("./post")(sequelize, DataTypes);
const AfterCare = require("./after-care")(sequelize, DataTypes);
// User <=> post Associations
User.hasMany(Post, {
  foreignKey: "authorId",
  onDelete: "CASCADE",
  as: "posts",
});
Post.belongsTo(User, {
  foreignKey: "authorId",
  onDelete: "CASCADE",
  as: "user",
});

// category <=> post Associations
// Crochet <=> Category
CrochetType.hasMany(Crochet, { foreignKey: "crochetTypeId", as: "crochets" });
Crochet.belongsTo(CrochetType, {
  foreignKey: "crochetTypeId",
  as: "crochetType",
});

Category.hasMany(Post, {
  foreignKey: "categoryId",
  onDelete: "SET NULL",
  as: "posts",
});
Post.belongsTo(Category, {
  foreignKey: "categoryId",
  onDelete: "SET NULL",
  as: "category",
});

// Order <=> Crochet relationship with Crochet
Order.belongsToMany(Crochet, {
  through: OrderItem,
  foreignKey: "orderId",
  onDelete: "CASCADE",
  as: "crochets",
});

Crochet.belongsToMany(Order, {
  through: OrderItem,
  foreignKey: "crochetId",
  otherKey: "orderId",
  onDelete: "CASCADE",
  as: "orders",
});

// Order <=> User
User.hasMany(Order, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  as: "orders",
});
Order.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  as: "user",
});

// Order <=> Payment
Order.hasOne(Payment, { foreignKey: "orderId", as: "payment" });
Payment.belongsTo(Order, { foreignKey: "orderId", as: "order" });

// crochet <=> cartItem
Crochet.hasMany(CartItem, { foreignKey: "crochetId", as: "cartItems" });
CartItem.belongsTo(Crochet, { foreignKey: "crochetId", as: "crochet" });

// cartItem <=> User
User.hasMany(CartItem, {
  foreignKey: "userId",
  as: "cart_items",
  onDelete: "CASCADE",
});
CartItem.belongsTo(User, { foreignKey: "userId", as: "user" });

// user <=> payment
User.hasMany(Payment, { foreignKey: "userId", as: "payments" });
Payment.belongsTo(User, { foreignKey: "userId", as: "user" });

module.exports = {
  User,
  Media,
  Crochet,
  CrochetType,
  Role,
  Order,
  OrderItem,
  Payment,
  Review,
  CartItem,
  Subscriber,
  Category,
  Post,
  AfterCare,
};
