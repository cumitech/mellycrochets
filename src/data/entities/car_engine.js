// models/CarEngine.ts
const FuelType = require("./fuel_type");

module.exports = (sequelize, DataTypes) => {
  const CarEngine = sequelize.define(
    "CarEngine",
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
      horsepower: {
        //280 lb-ft
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      fuelTypeId: {
        //"Gasoline", "Electric", "Hybrid"
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: FuelType,
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "car_engines",
      timestamps: true,
    }
  );

  return CarEngine;
};
