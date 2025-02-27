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
    },
    {
      sequelize,
      tableName: "media_tbl",
      timestamps: true,
    }
  );

  return Media;
};
