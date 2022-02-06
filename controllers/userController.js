const {
	User
} = require('../models');

module.exports = {
	createUser: async (req, res) => {
		const { firstName, lastName, email, password, role } = req.body;
		if (!firstName || !lastName || !email || !password || !role) {
			return res.status(400).json({ error: 'You must provide a username, email, and password'});
		}
		try {
			const user = await User.create({
				firstName,
				lastName,
				email,
				password,
				role,
				groupId,
			});
			res.json(user);
		} catch (e) {
			res.json(e);
		}
	},

	getUserById: async (req, res) => {
		req.session.save(() => {
			if (req.session.visitCount) {
				req.session.visitCount++;
			} else {
				req.session.visitCount = 1;
			}
		});
		try {
			const userData = await User.findByPk(req.params.userId);
			const user = userData.get({ plain: true });
			res.render('singleUser', {
				user,
				visitCount: req.session.visitCount,
			});
		} catch (e) {
			res.json(e);
		}
	},

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
		const { firstName, lastName, email, password, role, groupId } = req.body;
		try {
			const createdUser = await User.create({
				firstName,
				lastName,
				email,
				password,
				role,
				groupId,
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

	loginView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/homepage');
		}
		res.render('login');
	},

	signupView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/homepage');
		}
		res.render('signUp');
	},

	logout: (req, res) => {
		req.session.destroy(() => {
			res.send({ status: true });
		});
	},

	renderHome: (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			res.render('homepage', {
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},
}