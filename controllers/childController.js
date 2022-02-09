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
            res.json(createdChild);
		} catch (e) {
			res.json(e);
		}
	},
}