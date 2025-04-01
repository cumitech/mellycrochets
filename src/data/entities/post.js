// models/Post.ts
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      id: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      summary: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      slug: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      authorId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      categoryId: {
        type: DataTypes.STRING(128),
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
      },
      status: {
        type: DataTypes.ENUM("draft", "published", "archived"),
        defaultValue: "draft",
      },
    },
    {
      sequelize,
      tableName: "posts",
      timestamps: true,
    }
  );

  return Post;
};
