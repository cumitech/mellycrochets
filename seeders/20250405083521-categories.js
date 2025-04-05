// seeders/20250404-category-seeder.js
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const { nanoid } = await import("nanoid");
    await queryInterface.bulkInsert("categories", [
      {
        id: nanoid(20),
        name: "Announcements",
        slug: "announcements",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        name: "Aftercare",
        slug: "aftercare",
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
        name: "Blog Posts",
        slug: "blog-posts",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};