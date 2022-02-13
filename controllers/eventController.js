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

    renderCalendar: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		if (req.session.user.approval == 0) {
			return res.redirect('/waitingapproval');
		}
		try {
			const userEventsData = await Event.findAll({
				where: {
					familyName: req.session.user.familyName,
				},
			});
			res.render('calendar', {
				userEvents: userEventsData.map(userEvent => userEvent.get({ plain: true })),
			});
		} catch (e) {
			res.json(e);
		}
	},
};