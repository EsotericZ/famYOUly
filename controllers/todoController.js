const { Todo } = require('../models');

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
				completedUser: req.session.user.id,
			},
		{where: {
			id
		}
	});
		} catch (e) {
			res.json(e);
		}
	}
}