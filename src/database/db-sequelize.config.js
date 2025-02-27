// sequelize.ts
const { Sequelize } = require("sequelize");
const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

if (
  !process.env.POSTGRES_HOST ||
  !process.env.POSTGRES_DATABASE ||
  !process.env.POSTGRES_USER ||
  !process.env.POSTGRES_PASSWORD
) {
  throw new Error("Missing database environment variables.");
}

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    dialectModule: pg,
    benchmark: true,
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection failed", error);
  }
})();

module.exports = sequelize;
