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
			const user = createdUser.get({ plain: true });
			req.session.save(() => {
				req.session.loggedIn = true;
				req.session.user = user;
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

	myFamily: async (req, res) => {
		try {
			const userData = await User.findAll({
				where: {
					familyName: req.session.user.familyName,
				}
			});
			res.render('myfamily', {
				fullFam: userData.map(famMember => famMember.get({ plain: true })),
				// user: req.session.user,
				// fullFam,
			});
		} catch (e) {
			res.json(e);
		}
	},
}