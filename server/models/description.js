const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Description = sequelize.define('description', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING },
})

module.exports = Description