"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { nanoid } = await import("nanoid");

    await queryInterface.bulkInsert("crochets", [
      {
        id: nanoid(20),
        name: "Cozy Winter Scarf",
        description: "A warm and soft handmade crochet scarf.",
        price: 19.99,
        stock: 10,
        crochetTypeId: "Gey0UqPlrSipPzRibQCx",
        imageUrls: JSON.stringify([
          "https://example.com/scarf1.jpg",
          "https://example.com/scarf2.jpg",
        ]),
        size: "M",
        color: "Blue",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Handmade Beanie",
        description: "A stylish and warm crochet beanie.",
        price: 14.99,
        stock: 15,
        crochetTypeId: "GWi4AM2FxM9a6UGl6N2K",
        imageUrls: JSON.stringify([
          "https://example.com/beanie1.jpg",
          "https://example.com/beanie2.jpg",
        ]),
        size: "S",
        color: "Red",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Elegant Tablecloth",
        description: "A beautifully handcrafted crochet tablecloth.",
        price: 49.99,
        stock: 5,
        crochetTypeId: "jaOz5Whw90rcbBuVqvRc",
        imageUrls: JSON.stringify(["https://example.com/tablecloth1.jpg"]),
        size: "L",
        color: "White",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Cozy Mittens",
        description: "Soft and comfortable crochet mittens for winter.",
        price: 17.99,
        stock: 12,
        crochetTypeId: "qW5YGLX8YEZd7X4FknSt",
        imageUrls: JSON.stringify(["https://example.com/mittens1.jpg"]),
        size: "M",
        color: "Gray",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("categories", [
      {
        id: nanoid(20),
        name: "Blankets",
        slug: "blankets",
        description: "Cozy and warm crochet blankets for all seasons.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Toys",
        slug: "toys",
        description: "Adorable crochet toys for kids and collectors.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Accessories",
        slug: "accessories",
        description:
          "Stylish crochet accessories like hats, scarves, and bags.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Home Decor",
        slug: "home-decor",
        description: "Beautiful crochet items to decorate your home.",
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
    await queryInterface.bulkDelete("crochets", null, {});
    await queryInterface.bulkDelete("categories", null, {});
  },
};
