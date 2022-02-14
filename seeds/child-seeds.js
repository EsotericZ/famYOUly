const { Child } = require('../models');

const childData = [
    {
        modalId: 1,
        firstName: 'Sansa',
        lastName: 'Stark',
        nickname: '',
        pronouns: 'She/Her',
        birthday: '1986-02-05',
        familyName: 'Stark',
    },
    {
        modalId: 2,
        firstName: 'Arya',
        lastName: 'Stark',
        nickname: 'Shadow',
        pronouns: 'They/Them',
        birthday: '1988-02-08',
        familyName: 'Stark',
    },
    {
        modalId: 3,
        firstName: 'Bran',
        lastName: 'Stark',
        nickname: 'The Eye',
        pronouns: 'He/Him',
        birthday: '1995-04-01',
        familyName: 'Stark',
    },
];

const seedChildren = () => Child.bulkCreate(childData);

module.exports = seedChildren;