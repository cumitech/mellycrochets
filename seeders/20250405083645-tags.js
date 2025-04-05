// seeders/20250404-tag-seeder.js
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const { nanoid } = await import("nanoid");
    await queryInterface.bulkInsert("tags", [
      {
        id: nanoid(20),
        name: "Yarn Types",
        slug: "yarn-types",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Care Instructions",
        slug: "care-instructions",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Tips",
        slug: "tips",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Crochet Updates",
        slug: "crochet-updates",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Hats & Beanies",
        slug: "hats-and-beanies",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Baby Blankets",
        slug: "baby-blankets",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
