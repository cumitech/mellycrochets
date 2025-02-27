// sequelize.ts
const { Sequelize } = require("sequelize");
const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

if (
  !process.env.POSTGRES_DATABASE ||
  !process.env.POSTGRES_USER ||
  !process.env.POSTGRES_PASSWORD
) {
  throw new Error("Missing database environment variables.");
}

const sequelize = new Sequelize({
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  dialect: "postgres",
  dialectModule: pg,
  benchmark: true,
  port: parseInt(process.env.POSTGRES_PORT),
});

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Database connected successfully.");
//     await sequelize.sync();
//   } catch (error) {
//     console.error("Database connection failed", error);
//   }
// })();

module.exports = sequelize;
