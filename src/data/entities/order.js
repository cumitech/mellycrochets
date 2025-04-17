// models/Order.ts
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.STRING(50),
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      totalQtty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      totalAmount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      orderNo: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      telephone: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      paymentMethod: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "orders",
      timestamps: true,
    }
  );

  return Order;
};
