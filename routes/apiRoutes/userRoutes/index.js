const router = require('express').Router();
const {
	login,
	signupHandler,
	logout,
	updateUser,
	deleteUser,
	approveUser,
} = require('../../../controllers/userController');

router.post('/signup', signupHandler);
router.post('/login', login);
router.post('/logout', logout);
router.post('/updateuser', updateUser);
router.post('/approveuser', approveUser);
router.post('/deleteuser', deleteUser);

module.exports = router;