const { Family } = require('../models');

const familyData = [
    {
        familyName: 'Stark',
    },
    {
        familyName: 'Lannister',
    },
];

const seedFamilies = () => Family.bulkCreate(familyData);

module.exports = seedFamilies;