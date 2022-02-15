const {
	User,
	Child,
	Todo,
	Event,
} = require('../models');

const { Op } = require('sequelize');

module.exports = {
	login: async (req, res) => {
		try {
			const userData = await User.findOne({ 
				where: {
					email: req.body.email
				}
			});
			const userFound = userData.get({ plain: true });
			if (userFound.password === req.body.password) {
				req.session.save(() => {
					req.session.loggedIn = true;
					req.session.user = userFound;
					res.json({ success: true });
				});
			}
		} catch (e) {
			res.json(e);
		}
	},

	signupHandler: async (req, res) => {
		const { familyName, firstName, lastName, email, password, role, phoneNumber } = req.body;
		try {
			const createdUser = await User.create({
				familyName,
				firstName,
				lastName,
				email,
				password,
				role,
				approval: false,
				level: 3,
				visible: 'No',
				phoneNumber,
			});
			const user = createdUser.get({ plain: true });
			req.session.save(() => {
				req.session.loggedIn = true;
				req.session.user = user;
				res.redirect('/waitingapproval');
			});
		} catch (e) {
			res.json(e);
		}
	},

	updateUser: async (req, res) => {
		const { id, firstName, lastName, role, phoneNumber, level, visible } = req.body;
		try {
			const updatedUser = await User.update({
				firstName,
				lastName,
				role,
				phoneNumber,
				level,
				visible,
			},
				{where: {
				    id
				}
			});
			res.redirect('/myfamily');
		} catch (e) {
			res.json(e);
		}
	},

	updateProfile: async (req, res) => {
		const { id, firstName, lastName, email, phoneNumber } = req.body;
		try {
			const updatedProfile = await User.update({
				firstName,
				lastName,
				email,
				phoneNumber,
			},
				{where: {
				    id
				}
			});
			const user = updatedProfile.get({ plain: true });
			req.session.save(() => {
				req.session.loggedIn = true;
				req.session.user = user;
				res.redirect('/profile');
			});
		} catch (e) {
			res.json(e);
		}
	},

	approveUser: async (req, res) => {
		const { id } = req.body;
		try {
			const updatedUser = await User.update({
				approval: 1,
			},
				{where: {
				    id
				}
			});
			res.redirect('/myfamily');
		} catch (e) {
			res.json(e);
		}
	},

	deleteUser: async (req, res) => {
		const { id } = req.body;
		try {
			const deleteUser = await User.destroy({
				where: {
				    id
				}
			});
			res.redirect('/myfamily');
		} catch (e) {
			res.json(e);
		}
	},

	loginView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/homepage');
		}
		res.render('login');
	},

	signupView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/waitingapproval');
		}
		res.render('signup');
	},

	logout: (req, res) => {
		req.session.destroy(() => {
			res.send({ status: true });
		});
	},

	renderHome: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		if (req.session.user.approval == 0) {
			return res.redirect('/waitingapproval');
		}
		try {
			const childData = await Child.findAll({
				where: {
					familyName: req.session.user.familyName,
				},
				order: [
					["birthday", "ASC"],
				]
			});
			const userTodosData = await Todo.findAll({
				where: {
					familyName: req.session.user.familyName,
				}
			});
			const userEventsData = await Event.findAll({
				where: {
					familyName: req.session.user.familyName,
				},
				order: [
					["start", "ASC"],
					["startTime", "ASC"],
				]
					// start: {
					// 	[Op.gte]: moment()
					// }
				
			});
			res.render('homepage', {
				allKids: childData.map(kid => kid.get({ plain: true })),
				userTodos: userTodosData.map(userTodo => userTodo.get({ plain: true })),
				userEvents: userEventsData.map(userEvent => userEvent.get({ plain: true })),
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},

	renderProfile: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		if (req.session.user.approval == 0) {
			return res.redirect('/waitingapproval');
		}
		try {
			res.render('profile', {
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},

	renderWaiting: (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			res.render('waitingapproval', {
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},
}