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
        onDelete: "SET NULL",
      },
      orderId: {
        type: DataTypes.STRING(50),
        allowNull: true,
        references: {
          model: "orders",
          key: "id",
        },
        onDelete: "SET NULL",
      },
      transactionId: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: false,
      },
      requestId: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: false,
      },
      price: {
        type: DataTypes.DECIMAL,
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
      username: {
        type: DataTypes.STRING(50),
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
      currency: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      transactionTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      countryCode: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      mchTransactionRef: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
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
