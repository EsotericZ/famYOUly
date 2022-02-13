const router = require('express').Router();
const {
    createEvent,
} = require('../../../controllers/eventController');

router.post('/newevent', createEvent);

module.exports = router;