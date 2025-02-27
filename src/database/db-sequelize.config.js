// sequelize.ts
const { Sequelize } = require("sequelize");
const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const logQuery = (query, options) => {
  return options;
};

const makeConfig = () => {
  const isDev = process.env.NODE_ENV !== "production";

  const config = {
    host: `${process.env.POSTGRES_HOST}`,
    port: parseInt(process.env.POSTGRES_PORT),
    dialect: "postgres",
    dialectModule: pg,
    logging: isDev ? logQuery : false,
    ssl: true,
  };

  if (!isDev) {
    config.dialectOptions = {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    };
  }

  return config;
};

const sequelize = new Sequelize(
  `${process.env.POSTGRES_DATABASE}`, 
  `${process.env.POSTGRES_USER}`,
  `${process.env.POSTGRES_PASSWORD}`,
  makeConfig()
);

module.exports = sequelize;
