const {
	User,
	Child,
	Todo,
	Event,
} = require('../models');

const { Op } = require('sequelize');
const TODAY_START = new Date().setHours(0, 0, 0, 0);

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
		console.log('made it%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
		console.log(req.body)
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
			console.log(updatedProfile)
			
			// const user = updatedProfile.get({ plain: true });
			// req.session.destroy();
			req.session.save(() => {
				console.log('imhap!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', user)
				req.session.loggedIn = true;
				req.session.user = user;
				req.session.firstName = firstName;
				// res.redirect('/profile');
				res.json(true)
			});
		} catch (e) {
			console.log(e)
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
			const anyTodosData = await Todo.findAll({
				where: {
					familyName: req.session.user.familyName,
					completed: false,
				},
			});
			const userEventsData = await Event.findAll({
				where: {
					familyName: req.session.user.familyName,
					start: {
						[Op.gt]: TODAY_START-1,
					},
				},
				order: [
					["start", "ASC"],
					["startTime", "ASC"],
				]
			});
			res.render('homepage', {
				allKids: childData.map(kid => kid.get({ plain: true })),
				userTodos: userTodosData.map(userTodo => userTodo.get({ plain: true })),
				anyTodos: anyTodosData.map(anyTodo => anyTodo.get({ plain: true })),
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