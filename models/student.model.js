module.exports = (sequelize, DataTypes) => {
    return sequelize.define('student', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        course: DataTypes.STRING,
    });
};