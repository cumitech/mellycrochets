// models/PostTag.ts
module.exports = (sequelize, DataTypes) => {
  const PostTag = sequelize.define(
    "PostTag",
    {
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
      },
      postId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: "posts",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      tagId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: "tags",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      tableName: "post_tags",
      timestamps: false,
    }
  );

  return PostTag;
};
