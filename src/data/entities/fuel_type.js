// models/FuelType.js
module.exports = (sequelize, DataTypes) => {
  const FuelType = sequelize.define(
    "FuelType",
    {
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
      },
      name: {
        //diesel, gasoline, petrol, electric
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      tableName: "fuel_types",
      timestamps: true,
    }
  );

  return FuelType;
};
