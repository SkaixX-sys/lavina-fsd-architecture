const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Equipment = sequelize.define("equipment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  category: { type: DataTypes.STRING, allowNull: true },
  weekendNewPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  weekendOldPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  weekdayNewPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  weekdayOldPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  weekendFirstNewPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  weekendFirstOldPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  weekdayFirstNewPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  weekdayFirstOldPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
});

module.exports = Equipment;
