const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
     {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        port: process.env.DB_PORT || 5432,
        logging: false
    }
    )

const User = require('./user.model')(sequelize, DataTypes);
const Student = require('./student.model')(sequelize, DataTypes);

module.exports = { sequelize, User, Student };
