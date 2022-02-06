const {
	Information,
    User
} = require('../models');

module.exports = {
    createInformation: (req, res) => {
        
    },

	renderInformation: (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			res.render('information', {
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	}
}