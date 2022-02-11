const {
	User,
	Child,
	Todo,
} = require('../models');

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
			console.log(e);
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
				visible: false,
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
		const { id, firstName, lastName, role, level, phoneNumber } = req.body;
		try {
			const updatedUser = await User.update({
				firstName,
				lastName,
				role,
				level,
				phoneNumber,
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
				}
			});
			const userTodosData = await Todo.findAll({
				where: {
					familyName: req.session.user.familyName,
				}
			});
			res.render('homepage', {
				allKids: childData.map(kid => kid.get({ plain: true })),
				userTodos: userTodosData.map(userTodo => userTodo.get({ plain: true })),
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