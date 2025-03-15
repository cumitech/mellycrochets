// models/crochet.ts

module.exports = (sequelize, DataTypes) => {
  const crochet = sequelize.define(
    "crochet",
    {
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      crochetTypeId: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      imageUrls: {
        type: DataTypes.JSON, // Stores multiple image URLs
      },
      size: {
        type: DataTypes.ENUM("S", "M", "L", "XL"),
      },
      color: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "crochets",
      timestamps: true,
    }
  );
  return crochet;
};
