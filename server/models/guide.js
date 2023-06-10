const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Guide = sequelize.define("guide", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  howManyPeople: { type: DataTypes.STRING, allowNull: true },
  weekendNewPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  weekendOldPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  weekdayNewPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  weekdayOldPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
});

module.exports = Guide;
