const {
	Family, User
} = require('../models');

module.exports = {
	createFamily: async (req, res) => {
		const { familyName, firstName, lastName, email, password, role } = req.body;
		try {
			const createdFamily = await Family.create({
				familyName,
			});
			const createdUser = await User.create({
				firstName,
				lastName,
				email,
				password,
				role,
				familyName,
			});
			req.session.save(() => {
				res.redirect('/homepage');
			});
		} catch (e) {
			res.json(e);
		}
	},

    createFamilyView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/homepage');
		}
		res.render('createfamily');
	},
}