// models/AfterCare.ts
module.exports = (sequelize, DataTypes) => {
  const AfterCare = sequelize.define(
    "AfterCare",
    {
      id: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      videoUrl: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "after_cares",
      timestamps: true,
    }
  );

  return AfterCare;
};
