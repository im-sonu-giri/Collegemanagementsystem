const { sequelize, User } = require('./models');

async function seed() {
    try {
        await sequelize.sync({ force: true});
        console.log('tables synced');
        const hashedPassword = await bcrypt.hash('admin123',10)
        await User.create({
            username: 'admin',
            password: hashedPassword,
        });
        console.log('default user created');
        process.exit();

    }catch(error) {
        console.error('error seeding user:', error);
        process.exit(1);
    }
}
seed()