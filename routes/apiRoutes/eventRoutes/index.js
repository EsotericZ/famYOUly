const router = require('express').Router();
const {
    createEvent,
    updateEvent,
} = require('../../../controllers/eventController');

router.post('/newevent', createEvent);
router.post('/updateevent', updateEvent);

module.exports = router;