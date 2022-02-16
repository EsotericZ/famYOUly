const {
	Family, User
} = require('../models');

module.exports = {
	createFamily: async (req, res) => {
		const { familyName, firstName, lastName, email, password, role, phoneNumber } = req.body;
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
				approval: true,
				familyName,
				level: 1,
				visible: 'Yes',
				phoneNumber,
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
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		if (req.session.user.approval == 0) {
			return res.redirect('/waitingapproval');
		}
		try {
			const userData = await User.findAll({
				where: {
					familyName: req.session.user.familyName,
				},
				order: [
					['level', 'ASC'],
					['firstName', 'ASC'],
				]
			});
			const lvl2Data = await User.findAll({
				where: {
					familyName: req.session.user.familyName,
					level: [1, 2],
				},
				order: [
					['level', 'ASC'],
					['firstName', 'ASC'],
				]
			});
			const lvl3Data = await User.findAll({
				where: {
					familyName: req.session.user.familyName,
					visible: 'Yes',
				},
				order: [
					['level', 'ASC'],
					['firstName', 'ASC'],
				]
			});
			res.render('myfamily', {
				fullFam: userData.map(famMember => famMember.get({ plain: true })),
				lvl2Fam: lvl2Data.map(famMember => famMember.get({ plain: true })),
				lvl3Fam: lvl3Data.map(famMember => famMember.get({ plain: true })),
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},
}