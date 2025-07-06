const { DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    return sequelize.define {
        name= DataTypes.STRING,
        email =DataTypes.STRING,
        course = DataTypes.STRING,
    }
}