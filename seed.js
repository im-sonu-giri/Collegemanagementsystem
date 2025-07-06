const { sequelize, User } = require('./models');

async function seed() {
    try {
        await sequelize.sync({ force: true});
        User.create({
            username: 'admin',
            password: 'admin123',
        });
        console.log('default user created');
        process.exit();

    }catch(error) {
        console.error('error seeding user:', error);
        process.exit(1);
    }
}
seed()