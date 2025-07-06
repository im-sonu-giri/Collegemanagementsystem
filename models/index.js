const { sequelize , DataTypes } = require('sequelize')
const sequelize = new sequelize(
    process.env.DB_USER,
    process.env.DB_NAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
    )

const User = require("./user.model")(sequelize, DataTypes)
const Student = require("./student.model")(sequelize, DataTypes)

module.exports = {sequelize, User, Student}
