const {
	Information,
    User
} = require('../models');

module.exports = {
    createInformation: async (req, res) => {
        const {
			childId,
			contact,
			medical,
			list,
			groupId,
		} = req.body;
		try {
			const information = await Information.create({
				childId,
				contact,
				medical,
				list,
				groupId,
			});
			res.json(information);
		} catch (e) {
			res.json(e);
		}
	},


	renderInformation: (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			res.render('information', {
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	}
}