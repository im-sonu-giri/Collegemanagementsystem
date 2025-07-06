const { sequelize , DataTypes } = require('sequelize')
const sequelize = new sequelize(
    process.env.DB_USER,
    process.env.DB_NAME,
    process.env.DB_PASSWORD
    )
