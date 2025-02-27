const { Car } = require(".");

// models/Media.ts
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define(
    "Media",
    {
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      slug: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      imageUrl: {
        type: DataTypes.STRING(255),
      },
      carId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: Car,
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      tableName: "media_tbl",
      timestamps: true,
    }
  );

  return Media;
};
