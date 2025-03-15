"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { nanoid } = await import("nanoid");
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("subscribers", [
      {
        id: nanoid(20),
        email: "john.doe@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        email: "jane.smith@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        email: "michael.brown@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        email: "emily.white@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("roles", [
      {
        id: nanoid(20),
        name: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Vet",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("users", [
      {
        id: nanoid(20),
        email: "admin@vet.com",
        username: "admin",
        image: "https://via.placeholder.com/150",
        password: "hashedpassword",
        role: "Admin",
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        email: "vet@vet.com",
        username: "dr.vet",
        image: "https://via.placeholder.com/150",
        password: "hashedpassword",
        role: "Vet",
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        email: "customer@vet.com",
        username: "johncustomer",
        image: "https://via.placeholder.com/150",
        password: "hashedpassword",
        role: "Customer",
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("crochet_types", [
      {
        id: nanoid(20),
        name: "Sweaters",
        description: "Handmade crochet sweaters for all seasons",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Hats",
        description: "Stylish and warm crochet hats",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Scarves",
        description: "Cozy crochet scarves in different styles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Bags",
        description: "Fashionable crochet bags with unique patterns",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("subscribers", null, {});
    await queryInterface.bulkDelete("roles", null, {});
    await queryInterface.bulkDelete("users", null, {});
    // await queryInterface.bulkDelete("categories", null, {});
    await queryInterface.bulkDelete("crochet_types", null, {});
  },
};
