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
    {
        modalId: 5,
        title: 'Winter is Coming',
        notes: 'NOT REQ',
        start: '2019-01-01',
        end: '2022-02-14',
        allDay: true,
        startTime: '',
        endTime: '',
        location: '', 
        eventType: 'Required', //Optional //Request
        approval: true,
        familyName: 'Stark',
    },
    {
        modalId: 6,
        title: 'Pay Debts',
        notes: 'NOT REQ',
        start: '2022-02-21',
        end: '2022-02-21',
        allDay: false,
        startTime: '09:00',
        endTime: '10:00',
        location: 'Everywhere', 
        eventType: 'Required', //Optional //Request
        approval: true,
        familyName: 'Lannsiter',
    },
    {
        modalId: 7,
        title: 'Attend court',
        notes: 'NOT REQ',
        start: '2022-02-01',
        end: '2022-02-13',
        allDay: true,
        startTime: '',
        endTime: '',
        location: '', 
        eventType: 'Request', //Optional //Request
        approval: false,
        familyName: 'Lannsiter',
    },
    {
        modalId: 8,
        title: 'Joffrey: torture people',
        notes: 'NOT REQ',
        start: '2022-02-18',
        end: '2022-02-18',
        allDay: true,
        startTime: '17:00',
        endTime: '21:00',
        location: 'Throne Room', 
        eventType: 'Required', //Optional //Request
        approval: true,
        familyName: 'Lannsiter',
    },
    {
        modalId: 9,
        title: 'Tommen: cri over Margaery Tyrell',
        notes: 'NOT REQ',
        start: '2022-02-19',
        end: '2022-02-19',
        allDay: true,
        startTime: '05:00',
        endTime: '17:00',
        location: 'Throne Room', 
        eventType: 'Optional', //Optional //Request
        approval: true,
        familyName: 'Lannsiter',
    },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;