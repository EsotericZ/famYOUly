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
			res.json({ newTodo });
		} catch (e) {
			res.json(e);
		}
	},
}