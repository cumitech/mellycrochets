// models/Payment.ts
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    "Payment",
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
      orderId: {
        type: DataTypes.STRING(50),
        allowNull: false,
        references: {
          model: "orders",
          key: "id",
        },
      },
      orderNo: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.DECIMAL,
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
      status: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "payments",
      timestamps: true,
    }
  );

  return Payment;
};
