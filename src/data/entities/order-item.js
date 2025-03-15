// models/OrderItem.ts
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    "OrderItem",
    {
      crochetId: {
        type: DataTypes.STRING(50),
        allowNull: false,
        references: {
          model: "crochets",
          key: "id",
        },
      },
      orderId: {
        type: DataTypes.STRING(50),
        allowNull: false,
        references: {
          model: "orders",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "order_items",
      timestamps: true,
    }
  );

  return OrderItem;
};
