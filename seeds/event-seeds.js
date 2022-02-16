const { Event } = require('../models');

const eventData = [
    {
        modalId: 1,
        title: 'Something',
        notes: 'NOT REQ',
        start: '2022-02-17',
        end: '2022-02-17',
        allDay: false,
        startTime: '07:00',
        endTime: '13:00',
        location: 'NOT REQ', 
        eventType: 'Required', //Optional //Request
        approval: true,
        familyName: 'Stark',
    },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;