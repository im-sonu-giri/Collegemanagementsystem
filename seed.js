const { sequelize, User } = require('./models');

async function seed() {
    try {
        await sequelize.sync({ force: true});
        User.create({
            username: 'admin',
            password: 'admin123';
        })
    }
}