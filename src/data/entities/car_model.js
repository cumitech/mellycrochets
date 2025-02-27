// models/CarModel.ts
const CarMake = require("./car_make");

module.exports = (sequelize, DataTypes) => {
  const CarModel = sequelize.define(
    "CarModel",
    {
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
      },
      modelName: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      // Basic information
      carMakeId: {
        //manufacturers e.g; Toyota, Ford, BMW, Honda,
        type: DataTypes.STRING(128),
        allowNull: false,
        references: {
          model: CarMake,
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "car_models",
      timestamps: true,
    }
  );

  return CarModel;
};
