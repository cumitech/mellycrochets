// models/CrochetSize.ts
module.exports = (sequelize, DataTypes) => {
  const CrochetSize = sequelize.define(
    "CrochetSize",
    {
      id: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
      },
      crochetId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: "crochets",
          key: "id",
        },
      },
      sizeId: {
        type: DataTypes.STRING(20),
        allowNull: true,
        references: {
          model: "sizes",
          key: "id",
        },
      },
      colors: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
      },
    },
    {
      sequelize,
      tableName: "crochet_sizes",
      timestamps: true,
    }
  );

  return CrochetSize;
};
