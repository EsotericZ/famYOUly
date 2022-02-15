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
        picture: 'https://vignette.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/7/73/Sansa_Stark.png/revision/latest?cb=20170818143944&path-prefix=fr',
    },
    {
        modalId: 2,
        firstName: 'Arya',
        lastName: 'Stark',
        nickname: 'Shadow',
        pronouns: 'They/Them',
        birthday: '1988-02-08',
        familyName: 'Stark',
        picture: '',
    },
    {
        modalId: 3,
        firstName: 'Bran',
        lastName: 'Stark',
        nickname: 'The Eye',
        pronouns: 'He/Him',
        birthday: '1995-04-01',
        familyName: 'Stark',
        picture: '',
    },
];

const seedChildren = () => Child.bulkCreate(childData);

module.exports = seedChildren;