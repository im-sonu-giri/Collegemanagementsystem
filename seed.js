const { sequelize, User } = require('./models');

async function seed() {
    try {
        await sequelize.sync({ force: true})
    }
}