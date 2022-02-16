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
        visible: 'Yes',
        phoneNumber: 5551112211,
        picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2nzqyyfd6k6c7.cloudfront.net%2Fstyles%2Fnova_evo_landscape%2Fs3%2Farticle%2Fthumbnail%2Fgame_of_thrones_ned_stark_hbo.jpg%3Fitok%3DA8k71EBZ&f=1&nofb=1',
    },
    {
        firstName: 'Catelyn',
        lastName: 'Tully',
        email: 'catelyn@tully.com',
        password: 'password',
        role: 'Mother',
        familyName: 'Stark',
        approval: 1,
        level: 1,
        visible: 'Yes',
        phoneNumber: 5551113311,
        picture: '',
    },
    {
        firstName: 'Robb',
        lastName: 'Stark',
        email: 'robb@stark.com',
        password: 'password',
        role: 'Brother',
        familyName: 'Stark',
        approval: 0,
        level: 2,
        visible: 'Yes',
        phoneNumber: 5551114411,
        picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fgameofthronesfanon%2Fimages%2Fe%2Fe4%2FRobb_Stark.jpg%2Frevision%2Flatest%3Fcb%3D20180415165402&f=1&nofb=1',
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
        visible: 'No',
        phoneNumber: 5551115511,
        picture: '',
    },
    {
        firstName: 'Benjen',
        lastName: 'Stark',
        email: 'benjen@stark.com',
        password: 'password',
        role: 'Uncle',
        familyName: 'Stark',
        approval: 1,
        level: 2,
        visible: 'No',
        phoneNumber: 5551116611,
        picture: '',
    },
    {
        firstName: 'Hodor',
        lastName: 'Hodor',
        email: 'hodor@hodor.com',
        password: 'password',
        role: 'Babysitter',
        familyName: 'Stark',
        approval: 1,
        level: 3,
        visible: 'No',
        phoneNumber: 5551117711,
        picture: '',
    },
    {
        firstName: 'Lysa',
        lastName: 'Arryn',
        email: 'lysa@arryn.com',
        password: 'password',
        role: 'Aunt',
        familyName: 'Stark',
        approval: 1,
        level: 2,
        visible: 'No',
        phoneNumber: 5551117711,
        picture: '',
    },
    {
        firstName: 'Jamie',
        lastName: 'Lannister',
        email: 'jamie@lannister.com',
        password: 'password',
        role: 'Father',
        familyName: 'Lannister',
        approval: 1,
        level: 1,
        visible: 'Yes',
        phoneNumber: 5552221111,
        picture: '',
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
        visible: 'Yes',
        phoneNumber: 5552223311,
        picture: '',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;