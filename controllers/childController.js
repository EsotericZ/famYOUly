const {
	Child
} = require('../models');

module.exports = {
	addChild: async (req, res) => {
		const { firstName, lastName, nickname, pronouns, birthday, familyName } = req.body;
		try {
			const createdChild = await Child.create({
				firstName,
				lastName,
                nickname,
                pronouns,
                birthday,
				familyName,
			});
            // res.json(createdChild);
		} catch (e) {
			res.json(e);
		}
	},
	    
	updateChild: async (req, res) => {
		const { id, firstName, lastName, nickname, pronouns, birthday } = req.body;
		try {
			const updatedChild = await Child.update({
				firstName,
				lastName,
				nickname,
				pronouns,
				birthday,
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
}