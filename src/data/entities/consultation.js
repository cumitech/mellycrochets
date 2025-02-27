// models/Consultation.ts
const User = require("./user");

module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define(
    "Consultation",
    {
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      telephone: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      serviceType: {
        type: DataTypes.STRING(128), //buy, rent,insurance, general
        allowNull: false,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "approved", "completed", "canceled"),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "consultations",
      timestamps: true,
    }
  );

  return Consultation;
};
