"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('payments', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("payments", {
      id: {
        type: Sequelize.STRING(50),
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.STRING(50),
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "SET NULL",
      },
      orderId: {
        type: Sequelize.STRING(50),
        allowNull: true,
        references: {
          model: "orders",
          key: "id",
        },
        onDelete: "SET NULL",
      },
      transactionId: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: false,
      },
      requestId: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      telephone: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      paymentMethod: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      currency: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      transactionTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      countryCode: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      mchTransactionRef: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('payments');
     */
    await queryInterface.dropTable("payments");
  },
};
