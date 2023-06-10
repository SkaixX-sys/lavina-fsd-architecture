const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Tour = sequelize.define("tour", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  oneSeat: { type: DataTypes.STRING, allowNull: true },
});

module.exports = Tour;
