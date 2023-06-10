const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Pass = sequelize.define("pass", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING, allowNull: true },
  tagline: { type: DataTypes.STRING, allowNull: true },
  newPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  oldPrice: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
});

module.exports = Pass;
