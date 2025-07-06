module.exports =(sequelize ,DataType) => {
    return sequelize.define('User', {
        username:DataType.STRING,
        password: DataType.STRING,
    });
};