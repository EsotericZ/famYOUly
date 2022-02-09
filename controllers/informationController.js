const {
	Information,
    User
} = require('../models');

module.exports = {
    createInformation: async (req, res) => {
        const {
			childId,
			// contact,
			medical,
			list,
			groupId,
		} = req.body;
		try {
			const informationData = await Information.create({
				childId,
				// contact,
				medical,
				list,
				groupId,
			});
			const information = informationData.get({plain: true});
			res.render('information', { information });
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