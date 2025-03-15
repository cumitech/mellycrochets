// models/CartItem.ts
module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define(
    "CartItem",
    {
      id: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
      },
      crochetId: {
        type: DataTypes.STRING(128),
        allowNull: false,
        references: {
          model: "crochets",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.STRING(128),
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discountPercentage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discountedPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "cart_items_tbl",
      timestamps: true,
    }
  );

  return CartItem;
};
