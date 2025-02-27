const sequelize = require("../../database/db-sequelize.config");
const { DataTypes } = require("sequelize");

const User = require("./user")(sequelize, DataTypes);
const Media = require("./media")(sequelize, DataTypes);

module.exports = {
  User,
  Media,
};
