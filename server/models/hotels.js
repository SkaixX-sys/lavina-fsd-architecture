const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Hotels = sequelize.define('hotels', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, allowNull: false, unique:true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    isFullBusy: { type: DataTypes.BOOLEAN, allowNull: false },
    weekendTourPrice: {type: DataTypes.DECIMAL(7,2), allowNull: false},
    weekdayTourPrice: {type: DataTypes.DECIMAL(7,2), allowNull: false},
    threeWeekendsTourPrice: {type: DataTypes.DECIMAL(7,2), allowNull: false},
    threeWeekdaysTourPrice: {type: DataTypes.DECIMAL(7,2), allowNull: false},
})

module.exports = Hotels