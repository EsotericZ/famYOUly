const { Child, Contact } = require('../models');

const childData = [
    {
        modalId: 100,
        firstName: 'Sansa',
        lastName: 'Stark',
        nickname: 'Queen of the North',
        pronouns: 'She/Her',
        birthday: '1986-02-05',
        familyName: 'Stark',
        picture: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fforum%2F78000%2F78091_1304243113169_full.jpg&f=1&nofb=1',
    },
    {
        modalId: 102,
        firstName: 'Arya',
        lastName: 'Stark',
        nickname: 'A Girl Has No Nickname',
        pronouns: 'They/Them',
        birthday: '1988-02-08',
        familyName: 'Stark',
        picture: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia4.popsugar-assets.com%2Ffiles%2F2014%2F08%2F28%2F937%2Fn%2F3019466%2F2d8695defdbd0e64_5048185%2Fi%2FArya-Stark.jpg&f=1&nofb=1',
    },
    {
        modalId: 103,
        firstName: 'Bran',
        lastName: 'Stark',
        nickname: 'Bran the Broken',
        pronouns: 'He/Him',
        birthday: '1995-04-01',
        familyName: 'Stark',
        picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.images.express.co.uk%2Fimg%2Fdynamic%2F20%2F590x%2Fsecondary%2Flord-of-light-game-of-thrones-1848082.png%3Fr%3D1556558562355&f=1&nofb=1',
    },
    {
        modalId: 4,
        firstName: 'Mrycella',
        lastName: 'Baratheon',
        nickname: 'Marci',
        pronouns: 'She/Her',
        birthday: '1995-05-31',
        familyName: 'Lanniser',
        picture: '',
    },
    {
        modalId: 5,
        firstName: 'Joffrey',
        lastName: 'Baratheon',
        nickname: 'Joff',
        pronouns: 'He/Him',
        birthday: '1998-7-01',
        familyName: 'Lannister',
        picture: '',
    },
    {
        modalId: 6,
        firstName: 'Tommen',
        lastName: 'Baratheon',
        nickname: '',
        pronouns: 'He/Him',
        birthday: '200-08-20',
        familyName: 'Lannister',
        picture: '',
    },
];

const seedChildren = () => Child.bulkCreate(childData);

module.exports = seedChildren;