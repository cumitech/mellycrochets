// models/Car.ts
const CarModel = require("./car_model");
const CarTransmission = require("./car_transmission");
const CarEngine = require("./car_engine");
const Location = require("./location");

module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    "Car",
    {
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
      },

      carNum: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
      },
      carModelId: {
        // "Camry", "Mustang", "X5", "Accord"
        type: DataTypes.STRING(128),
        allowNull: false,
        references: {
          model: CarModel,
          key: "id",
        },
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      numOfSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      availabilityStatus: {
        type: DataTypes.ENUM("available", "rented", "sold"),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      // mechanical details
      transmissionId: {
        //mannual or automatic
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: CarTransmission,
          key: "id",
        },
      },

      engineId: {
        //2.5L 4-Cylinder
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: CarEngine,
          key: "id",
        },
      },

      // Pricing
      dailyRate: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      salesPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },

      // others
      locationId: {
        //2.5L 4-Cylinder
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: Location,
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "cars",
      timestamps: true,
    }
  );

  return Car;
};