// models/Inquiry.ts
const User = require("./user");
const Car = require("./car");

module.exports = (sequelize, DataTypes) => {
  const Inquiry = sequelize.define(
    "Inquiry",
    {
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      telephone: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      carId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: Car,
          key: "id",
        },
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      inquiry_type: {
        type: DataTypes.ENUM("rent", "buy"),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "inquiries",
      timestamps: true,
    }
  );

  return Inquiry;
};
