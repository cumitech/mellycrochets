// models/Tag.ts
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      tableName: "tags",
      timestamps: true,
    }
  );

  return Tag;
};
