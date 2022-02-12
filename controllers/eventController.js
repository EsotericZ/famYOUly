// module.exports = {
// 	renderCalendar: async (req, res) => {
// 		if (!req.session.loggedIn) {
// 			return res.redirect('/login');
// 		}
// 		if (req.session.user.approval == 0) {
// 			return res.redirect('/waitingapproval');
// 		}
// 		try {
// 			res.render('calendar', {
// 				user: req.session.user,
// 			});
// 		} catch (e) {
// 			res.json(e);
// 		}
// 	},
// };