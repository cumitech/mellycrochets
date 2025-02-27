// models/CarMake.ts

module.exports = (sequelize, DataTypes) => {
  const CarMake = sequelize.define(
    "CarMake",
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
    },
    {
      sequelize,
      tableName: "car_makes",
      timestamps: true,
    }
  );

  return CarMake;
};
