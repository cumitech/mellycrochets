module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("comments", {
      id: {
        type: Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false,
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      userId: {
        type: Sequelize.STRING(20),
        allowNull: false,
        references: {
          model: "users", // Table name, ensure it's correct
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      postId: {
        type: Sequelize.STRING(20),
        allowNull: false,
        references: {
          model: "posts", // Table name, ensure it's correct
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      toggle: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("comments");
  },
};