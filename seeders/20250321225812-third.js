"use strict";

/** @type {import('sequelize-cli').Migration} */
const slugify = require("slugify");

module.exports = {
  async up(queryInterface, Sequelize) {
    const { nanoid } = await import("nanoid");

    const crochets = [
      {
        name: "Crochet Crop Top",
        description:
          "This handmade crochet crop top is the perfect blend of style and comfort. Designed for warm weather, it offers a breathable, lightweight feel while adding a chic touch to your outfit.",
        price: 50000,
        images: ["crochet-crop-top.jpg"],
        crochetTypeId:"nW5bJt7YxPqKzMvURoEa"
      },
      {
        name: "Crochet Bikini",
        description:
          "Embrace the beach vibes with this stunning crochet bikini. Designed for both comfort and elegance, it offers a unique handmade touch that sets you apart at the beach or poolside.",
        price: 15000,
        images: ["crochet-bikini.jpg", "crochet-bikini-second.jpg"],
        crochetTypeId: "kP1xY9mLs0zW4vRQeTnB"
      },
      {
        name: "Crochet Bags",
        description:
          "These handmade crochet bags are the perfect accessory for any outfit. Stylish, durable, and eco-friendly, they offer ample space for your essentials while keeping you fashion-forward.",
        price: 18000,
        images: ["crochet-bags-main.jpg", "crochet-bags.jpg"],
        crochetTypeId:"nW5bJt7YxPqKzMvURoEa"
      },
      {
        name: "Unisex Pullover",
        description:
          "Stay warm and stylish with this cozy unisex crochet pullover. Crafted for comfort, it's perfect for chilly days while adding a handmade touch to your wardrobe.",
        price: 45000,
        images: ["unisex-pullovers-third.jpg", "unisex-pullovers-second.jpg"],
        crochetTypeId: "dU2pKy4TfNwZqRaLbXsj"
      },
      {
        name: "Beach Wears",
        description:
          "Perfect for sunny getaways, this crochet beachwear set brings effortless elegance to your vacation. Lightweight, breathable, and stylish, it's a must-have for your summer wardrobe.",
        price: 35000,
        images: ["beach-wares.jpg", "beach-wares-second.jpg"],
        crochetTypeId: "kP1xY9mLs0zW4vRQeTnB"
      },
      {
        name: "Crochet Jacket",
        description:
          "Elevate your style with this handcrafted crochet jacket. Featuring intricate designs and a cozy feel, it's the perfect blend of warmth and elegance for any season.",
        price: 60000,
        images: [
          "crochet-jackets.jpg",
          "crochet-jackets-second.jpg",
          "crochet-jacket-fourth.jpg",
          "crochet-jackets-third.jpg",
        ],
        crochetTypeId: "vQ9nLp5XyAsJMbEtrK0d"
      },
      {
        name: "Ruffle Hats",
        description:
          "Add a touch of charm to your look with these stylish ruffle hats. Handmade with care, they provide warmth and a unique fashion statement for any occasion.",
        price: 12000,
        images: ["ruffle-hats.jpg", "ruffle-hats-third.jpg", "ruffle-hats-second.jpg"],
        crochetTypeId: "nW5bJt7YxPqKzMvURoEa"
      },
      {
        name: "Caps (Beanies) for Adults",
        description:
          "Stay warm and trendy with our crochet beanies for adults. Designed for comfort and style, these beanies provide a snug fit while keeping you cozy in any season.",
        price: 10000,
        images: ["crochet-beanies-two.jpg", "crochet-beanies-main.jpg", "crochet-beanies.jpg"],
        crochetTypeId: "tK8zMq9YrNvbLaWPeXsf"
      },
      {
        name: "Crochet Dress",
        description:
          "Step out in elegance with this handmade crochet dress. Perfect for special occasions, this beautifully crafted piece exudes charm, class, and effortless sophistication.",
        price: 75000,
        images: ["crochet-dress-main.jpg", "crochet-dress-one.jpg", "crochet-dress-second.jpg"],
        crochetTypeId: "zT6mYv1BqWf9RoaEkJpx"
      },
      {
        name: "Two Piece Set",
        description:
          "This crochet two-piece set offers a perfect balance of comfort and style. Ideal for casual outings, it provides a unique handmade touch that enhances your wardrobe.",
        price: 40000,
        images: [
          "two-set-piece.jpg",
          "two-set-piece-four.jpg",
          "two-set-piece-three.jpg",
          "two-set-piece-two.jpg",
        ],
        crochetTypeId: "xA3bQr7TfKU92nLaeWYm"
      },
      {
        name: "Another Two Piece Set",
        description:
          "A stylish variation of our classic two-piece set, this handmade crochet outfit ensures you look effortlessly chic while enjoying maximum comfort and breathability.",
        price: 55000,
        images: ["tanother-two-set-piece-main.jpg", "another-two-set-piece.jpg"],
        crochetTypeId: "xA3bQr7TfKU92nLaeWYm"
      },
    ].map((item) => ({
      id: nanoid(20),
      name: item.name,
      slug: slugify(item.name, { lower: true, strict: true }),
      description: item.description,
      crochetTypeId: item.crochetTypeId, // Replace with actual type ID
      imageUrls: JSON.stringify(item.images),
      price: item.price,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("crochets", crochets);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("crochets", null, {});
  },
};