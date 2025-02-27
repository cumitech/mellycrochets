// models/CarTransmission.ts
module.exports = (sequelize, DataTypes) => {
  const CarTransmission = sequelize.define(
    "CarTransmission",
    {
      //"Automatic", "Manual"
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      tableName: "car_transmissions",
      timestamps: true,
    }
  );
  return CarTransmission;
};
