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
    // await queryInterface.bulkInsert("posts", [
    //   {
    //     id: nanoid(20),
    //     title: "Best Crochet Patterns for Beginners",
    //     summary: "A guide to easy crochet patterns.",
    //     slug: "best-crochet-patterns",
    //     content: "Detailed guide on crochet patterns...",
    //     imageUrl: "/images/crochet1.jpg",
    //     readTime: "5 min",
    //     publishedAt: new Date(),
    //     authorId: "9sVTNlRhXE3H5KOyk6RM",
    //     categoryId: "cat1",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     id: nanoid(20),
    //     title: "How to Choose the Right Yarn",
    //     summary: "Tips for selecting the perfect yarn for your project.",
    //     slug: "choose-right-yarn",
    //     content: "In-depth article on yarn selection...",
    //     imageUrl: "/images/crochet2.jpg",
    //     readTime: "7 min",
    //     publishedAt: new Date(),
    //     authorId: "s-GwmYjoLDGejbZuEe9n",
    //     categoryId: "cat2",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     id: nanoid(20),
    //     title: "Top 10 Crochet Gift Ideas",
    //     summary: "Great handmade gift ideas.",
    //     slug: "crochet-gift-ideas",
    //     content: "List of wonderful crochet gifts...",
    //     imageUrl: "/images/crochet3.jpg",
    //     readTime: "6 min",
    //     publishedAt: new Date(),
    //     authorId: "zXgu86lLBnQvUTGT4wMc",
    //     categoryId: "cat3",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     id: nanoid(20),
    //     title: "How to Sell Your Crochet Online",
    //     summary: "Guide to selling crochet items online.",
    //     slug: "sell-crochet-online",
    //     content: "Step-by-step guide to setting up an online store...",
    //     imageUrl: "/images/crochet4.jpg",
    //     readTime: "8 min",
    //     publishedAt: new Date(),
    //     authorId: "9sVTNlRhXE3H5KOyk6RM",
    //     categoryId: "cat4",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ]);
    await queryInterface.bulkInsert("reviews", [
      {
        id: nanoid(20),
        userId: "9sVTNlRhXE3H5KOyk6RM",
        crochetId: "6FvuJ-QZLKmcSUn25jeY",
        comment: "Amazing quality and fast shipping!",
        rating: 5,
        toggle: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        userId: "s-GwmYjoLDGejbZuEe9n",
        crochetId: "FUErlsHrp9Lh6iO1ataX",
        comment: "Very comfortable and well-made.",
        rating: 4,
        toggle: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        userId: "zXgu86lLBnQvUTGT4wMc",
        crochetId: "liY9-LCvSpA244bIAH5P",
        comment: "Looks great, but delivery was slow.",
        rating: 3,
        toggle: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        userId: "9sVTNlRhXE3H5KOyk6RM",
        crochetId: "y1fcEpAt36maDY0072HL",
        comment: "Beautiful craftsmanship, highly recommend!",
        rating: 5,
        toggle: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("orders", [
      {
        id: nanoid(20),
        userId: "9sVTNlRhXE3H5KOyk6RM",
        totalQtty: 3,
        discount: 5,
        totalAmount: 50.99,
        orderNo: "ORD12345",
        username: "Alice",
        address: "123 Street, NY",
        email: "alice@example.com",
        telephone: "1234567890",
        status: "Pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        userId: "s-GwmYjoLDGejbZuEe9n",
        totalQtty: 2,
        discount: 0,
        totalAmount: 35.0,
        orderNo: "ORD12346",
        username: "Bob",
        address: "456 Avenue, CA",
        email: "bob@example.com",
        telephone: "0987654321",
        status: "Shipped",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(20),
        userId: "zXgu86lLBnQvUTGT4wMc",
        totalQtty: 1,
        discount: 10,
        totalAmount: 20.0,
        orderNo: "ORD12347",
        username: "Charlie",
        address: "789 Blvd, TX",
        email: "charlie@example.com",
        telephone: "5678901234",
        status: "Delivered",
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
    await queryInterface.bulkDelete("posts", null, {});
    await queryInterface.bulkDelete("reviews", null, {});
    await queryInterface.bulkDelete("orders", null, {});
  },
};
