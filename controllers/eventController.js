const { Event } = require('../models');

module.exports = {
	createEvent: async (req, res) => {
        const { title, notes, start, end, allDay, startTime, endTime, location, eventType, familyName } = req.body;
        try {
            const newEvent = await Event.create({
                title,
                notes,
                start,
                end,
                allDay,
                startTime,
                endTime,
                location,
                eventType,
                familyName,
            });
			res.redirect('/homepage');
		} catch (e) {
			res.json(e);
		}
	},
};