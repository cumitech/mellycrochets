// models/Location.ts
const Country = require("./country");

module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      countryId: {
        //2.5L 4-Cylinder
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: Country,
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "locations",
      timestamps: true,
    }
  );

  return Location;
};
