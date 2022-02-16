const seedUsers = require('./user-seeds');
const seedFamilies = require('./family-seeds');
const seedChildren = require('./child-seeds');
const seedEvents = require('./event-seeds');

const sequelize = require('../config/');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedFamilies();
    console.log('\n----- FAMILIES SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedChildren();
    console.log('\n----- CHILDREN SEEDED -----\n');

    await seedEvents();
    console.log('\n----- EVENTS SEEDED -----\n');

    process.exit(0);
};

seedAll();