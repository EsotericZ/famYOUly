const seedUsers = require('./user-seeds');
const seedFamilies = require('./family-seeds');

const sequelize = require('../config/');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedFamilies();
    console.log('\n----- FAMILIES SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    process.exit(0);
};

seedAll();