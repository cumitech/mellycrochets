"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const { nanoid } = await import("nanoid");

    const afterCares = [
      {
        title: "General care for your crochets",
        videoUrl: "https://www.youtube.com/watch?v=-hcM3_w1EEU",
        description: "Learn how to generally care for your crochet products.",
      },
      {
        title: "How to take care for your crochets",
        videoUrl: "https://www.youtube.com/watch?v=-hcM3_w1EEU",
        description: "Basic aftercare tips and instructions.",
      },
      {
        title: "How to store your crochet items",
        videoUrl: "https://www.youtube.com/watch?v=-hcM3_w1EEU",
        description: "Keep your crochet items fresh and neat.",
      },
      {
        title: "Cleaning crochet products safely",
        videoUrl: "https://www.youtube.com/watch?v=-hcM3_w1EEU",
        description: "Avoid damage while cleaning crochets.",
      },
      {
        title: "What not to do with your crochets",
        videoUrl: "https://www.youtube.com/watch?v=-hcM3_w1EEU",
        description: "Common mistakes to avoid with crochet items.",
      },
      {
        title: "Aftercare essentials for crochet lovers",
        videoUrl: "https://www.youtube.com/watch?v=-hcM3_w1EEU",
        description: "Must-know tips for crochet enthusiasts.",
      },
    ].map((item) => ({
      id: nanoid(10),
      title: item.title,
      slug: slugify(item.title, { lower: true, strict: true }),
      videoUrl: item.videoUrl,
      description: item.description,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("after_cares", afterCares);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("after_cares", null, {});
  },
};
