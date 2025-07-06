const { sequelize , DataTypes } = require('sequelize')
const sequelize = new sequelize(
    process.env.DB_USER,
    process.env.DB_NAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
    )

const user = require("./user.model")(sequelize, DataTypes)
const student = require("./student.model")(sequelize, DataTypes)

module.exports = {sequelize, user, student}
