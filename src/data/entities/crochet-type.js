// models/CrochetType.ts

module.exports = (sequelize, DataTypes) => {
  const CrochetType = sequelize.define(
    "CrochetType",
    {
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
      },
      slug: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "crochet_types",
      timestamps: true,
    }
  );
  return CrochetType;
};
