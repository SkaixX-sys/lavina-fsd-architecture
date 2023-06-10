const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Lift = sequelize.define("lift", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  period: { type: DataTypes.STRING, allowNull: true },
  weekendNewPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  weekendOldPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  weekdayNewPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  weekdayOldPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
});

module.exports = Lift;
