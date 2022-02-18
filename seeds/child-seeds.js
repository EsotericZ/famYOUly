const { Child, Contact } = require('../models');

const childData = [
    {
        modalId: 1,
        firstName: 'Sansa',
        lastName: 'Stark',
        nickname: 'Queen of the North',
        pronouns: 'She/Her',
        birthday: '1986-02-05',
        familyName: 'Stark',
        picture: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fforum%2F78000%2F78091_1304243113169_full.jpg&f=1&nofb=1',
    },
    {
        modalId: 2,
        firstName: 'Arya',
        lastName: 'Stark',
        nickname: 'A Girl Has No Nickname',
        pronouns: 'They/Them',
        birthday: '1988-02-08',
        familyName: 'Stark',
        picture: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia4.popsugar-assets.com%2Ffiles%2F2014%2F08%2F28%2F937%2Fn%2F3019466%2F2d8695defdbd0e64_5048185%2Fi%2FArya-Stark.jpg&f=1&nofb=1',
    },
    {
        modalId: 3,
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
        familyName: 'Lannister',
        picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F909881817427308544%2FTS8-dtK0_400x400.jpg&f=1&nofb=1',
    },
    {
        modalId: 5,
        firstName: 'Joffrey',
        lastName: 'Baratheon',
        nickname: 'Joff',
        pronouns: 'He/Him',
        birthday: '1998-7-01',
        familyName: 'Lannister',
        picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.abc.net.au%2Fnews%2Fimage%2F7310248-3x2-940x627.jpg&f=1&nofb=1',
    },
    {
        modalId: 6,
        firstName: 'Tommen',
        lastName: 'Baratheon',
        nickname: '',
        pronouns: 'He/Him',
        birthday: '200-08-20',
        familyName: 'Lannister',
        picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftopicimages.mrowl.com%2Flarge%2Fchaseosburn%2Fchaos_is_a_ladder%2Factors%2Fdeancharles_chapman__tommen_baratheon_1.jpg&f=1&nofb=1',
    },
];

const seedChildren = () => Child.bulkCreate(childData);

module.exports = seedChildren;