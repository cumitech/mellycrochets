const sequelize = require("../../database/db-sequelize.config");
const { DataTypes } = require("sequelize");

const User = require("./user")(sequelize, DataTypes);
const CarTransmission = require("./car_transmission")(sequelize, DataTypes);
const FuelType = require("./fuel_type")(sequelize, DataTypes);
const CarMake = require("./car_make")(sequelize, DataTypes);
const CarModel = require("./car_model")(sequelize, DataTypes);
const CarEngine = require("./car_engine")(sequelize, DataTypes);
const Country = require("./country")(sequelize, DataTypes);
const Location = require("./location")(sequelize, DataTypes);
const Car = require("./car")(sequelize, DataTypes);
const Consultation = require("./consultation")(sequelize, DataTypes);
const Inquiry = require("./inquiry")(sequelize, DataTypes);
const Media = require("./media")(sequelize, DataTypes);

// CarMake ↔ CarModel
CarMake.hasMany(CarModel, { foreignKey: "carMakeId" });
CarModel.belongsTo(CarMake, { foreignKey: "carMakeId" });

// CarEngine ↔ Car
CarEngine.hasMany(Car, { foreignKey: "engineId" });
Car.belongsTo(CarEngine, { foreignKey: "engineId" });

// CarModel ↔ Car
CarModel.hasMany(Car, { foreignKey: "carModelId" });
Car.belongsTo(CarModel, { foreignKey: "carModelId" });

// One-to-Many Relationship
CarTransmission.hasMany(Car, { foreignKey: "transmissionId" });
Car.belongsTo(CarTransmission, { foreignKey: "transmissionId" });

// Car ↔ Inquiry
Car.hasMany(Inquiry, { foreignKey: "carId", onDelete: "CASCADE" });
Inquiry.belongsTo(Car, { foreignKey: "carId" });

// Country ↔ Location
Country.hasMany(Location, { foreignKey: "countryId" });
Location.belongsTo(Country, { foreignKey: "countryId" });

// FuelType ↔ CarEngine
FuelType.hasMany(CarEngine, { foreignKey: "fuelTypeId" });
CarEngine.belongsTo(FuelType, { foreignKey: "fuelTypeId" });

// Locaton ↔ Car
Location.hasMany(Car, { foreignKey: "locationId" });
Car.belongsTo(Location, { foreignKey: "locationId" });

// Car => Image
Car.hasMany(Media, {
  foreignKey: "carId",
  onDelete: "CASCADE",
});
Media.belongsTo(Car, {
  foreignKey: "carId",
  as: "car",
});

module.exports = {
  User,
  CarTransmission,
  FuelType,
  CarMake,
  CarModel,
  CarEngine,
  Country,
  Location,
  Car,
  Consultation,
  Inquiry,
  Media,
};
