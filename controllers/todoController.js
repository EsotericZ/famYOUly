const { Todo, User } = require('../models');

module.exports = {
	createTodo: async (req, res) => {
		const { task } = req.body;
		try {
			const newTodo = await Todo.create({
				task,
				userId: req.session.user.id,
				familyName: req.session.user.familyName,
			});
			res.redirect('/homepage');
		} catch (e) {
			res.json(e);
		}
	},

	completedTodo: async (req, res) => {
		const { id } = req.body;
		try {
			const finished = await Todo.update({
				completed: 1,
				completedFirstName: req.session.user.firstName,
				completedLastName: req.session.user.lastName,
				},
				{where: {
					id
				}
			});
			res.redirect('/homepage');
		} catch (e) {
			res.json(e);
		}
	},
		
	renderTodo: async (req, res) => {
		res.render('todo');
	},

	getAllTodos: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		if (req.session.user.approval == 0) {
			return res.redirect('/waitingapproval');
		}
		try {
			const userTodosData = await Todo.findAll({
				include: [
					{
						model: User,
						attributes: ['firstName', 'lastName'],
					},
				],
				where: {
					familyName: req.session.user.familyName,
				},
				order: [
					['completed', 'ASC'],
					['createdAt', 'ASC']
				]
			});
			res.render('todo', {
				userTodos: userTodosData.map(userTodo => userTodo.get({ plain: true })),
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},
}