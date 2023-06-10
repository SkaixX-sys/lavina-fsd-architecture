const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const AdditionalEquipment = sequelize.define("additionalEquipment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  category: { type: DataTypes.STRING, allowNull: true },
  newPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  oldPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
});

module.exports = AdditionalEquipment;
