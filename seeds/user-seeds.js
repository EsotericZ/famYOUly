const { User } = require('../models');

const userData = [
    {
        firstName: 'Ned',
        lastName: 'Stark',
        email: 'ned@stark.com',
        password: 'password',
        role: 'Father',
        familyName: 'Stark',
        approval: 1,
        level: 1,
        visible: 1,
    },
    {
        firstName: 'Catelyn',
        lastName: 'Stark',
        email: 'catelyn@stark.com',
        password: 'password',
        role: 'Mother',
        familyName: 'Stark',
        approval: 1,
        level: 1,
        visible: 1,
    },
    {
        firstName: 'Robb',
        lastName: 'Stark',
        email: 'robb@stark.com',
        password: 'password',
        role: 'Uncle',
        familyName: 'Stark',
        approval: 0,
        level: 2,
        visible: 0,
    },
    {
        firstName: 'Jon',
        lastName: 'Snow',
        email: 'jon@snow.com',
        password: 'password',
        role: 'Babysitter',
        familyName: 'Stark',
        approval: 1,
        level: 3,
        visible: 0,
    },
    {
        firstName: 'Tywin',
        lastName: 'Lannister',
        email: 'tywin@lannister.com',
        password: 'password',
        role: 'Father',
        familyName: 'Lannister',
        approval: 1,
        level: 1,
        visible: 1,
    },
    {
        firstName: 'Cersei',
        lastName: 'Lannister',
        email: 'cersei@lannister.com',
        password: 'password',
        role: 'Mother',
        familyName: 'Lannister',
        approval: 1,
        level: 1,
        visible: 1,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;