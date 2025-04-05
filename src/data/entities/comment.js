// models/comment.ts
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "comment",
    {
      id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.STRING(50),
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      postId: {
        type: DataTypes.STRING(50),
        allowNull: true,
        references: {
          model: "posts",
          key: "id",
        },
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      toggle: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "comments",
      timestamps: true,
    }
  );

  return comment;
};
