"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const { nanoid } = await import("nanoid");
    await queryInterface.bulkInsert("after_cares", [
      {
        id: nanoid(10),
        title: "General care for your crochets",
        videoUrl: "https://www.youtube.com/watch?v=abc123",
        description: "Learn how to generally care for your crochet products.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(10),
        title: "How to take care for your crochets",
        videoUrl: "https://www.youtube.com/watch?v=def456",
        description: "Basic aftercare tips and instructions.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(10),
        title: "How to store your crochet items",
        videoUrl: "https://www.youtube.com/watch?v=ghi789",
        description: "Keep your crochet items fresh and neat.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(10),
        title: "Cleaning crochet products safely",
        videoUrl: "https://www.youtube.com/watch?v=jkl012",
        description: "Avoid damage while cleaning crochets.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(10),
        title: "What not to do with your crochets",
        videoUrl: "https://www.youtube.com/watch?v=mno345",
        description: "Common mistakes to avoid with crochet items.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(10),
        title: "Aftercare essentials for crochet lovers",
        videoUrl: "https://www.youtube.com/watch?v=pqr678",
        description: "Must-know tips for crochet enthusiasts.",
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
    await queryInterface.bulkDelete("after_cares", null, {});
  },
};
