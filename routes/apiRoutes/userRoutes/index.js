const router = require('express').Router();
const {
	// createUser,
	// getUserById,
	login,
	signupHandler,
	logout,
	updateUser,
} = require('../../../controllers/userController');

// router.route('/')
// 	.post(createUser);

router.post('/signup', signupHandler);
router.post('/login', login);
router.post('/logout', logout);
router.post('/updateuser', updateUser);

// router.route('/:userId')
// 	.get(getUserById);

module.exports = router;