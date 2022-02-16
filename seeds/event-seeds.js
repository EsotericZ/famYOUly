const { Event } = require('../models');

const eventData = [
    {
        modalId: 1,
        title: 'Brush direwolves',
        notes: 'NOT REQ',
        start: '2022-02-17',
        end: '2022-02-17',
        allDay: false,
        startTime: '18:00',
        endTime: '21:00',
        location: 'The Barn', 
        eventType: 'Required', //Optional //Request
        approval: true,
        familyName: 'Stark',
    },
    {
        modalId: 2,
        title: 'Sansa - embriodery class',
        notes: 'NOT REQ',
        start: '2022-02-19',
        end: '2022-02-19',
        allDay: false,
        startTime: '18:00',
        endTime: '21:00',
        location: 'Front Room', 
        eventType: 'Required', //Optional //Request
        approval: true,
        familyName: 'Stark',
    },
    {
        modalId: 3,
        title: 'Show Arya how to stick them with the pointy end',
        notes: 'NOT REQ',
        start: '2022-02-20',
        end: '2022-02-20',
        allDay: true,
        startTime: '',
        endTime: '',
        location: 'The Barn', 
        eventType: 'Request', //Optional //Request
        approval: false,
        familyName: 'Stark',
    },
    {
        modalId: 4,
        title: 'Bran: See the future',
        notes: 'NOT REQ',
        start: '2022-02-21',
        end: '2022-02-21',
        allDay: false,
        startTime: '09:00',
        endTime: '10:00',
        location: 'Everywhere', 
        eventType: 'Optional', //Optional //Request
        approval: true,
        familyName: 'Stark',
    },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;