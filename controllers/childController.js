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
			// const user = createdChild.get({ plain: true });
			// req.session.save(() => {
			// 	req.session.loggedIn = true;
			// 	req.session.user = user;
			// 	res.redirect('/waitingapproval');
			// });
		} catch (e) {
			res.json(e);
		}
	},
}