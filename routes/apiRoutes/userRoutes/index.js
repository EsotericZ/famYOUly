const router = require('express').Router();
const {
	login,
	signupHandler,
	logout,
	updateUser,
	deleteUser,
	approveUser,
	updateProfile,
} = require('../../../controllers/userController');

router.post('/signup', signupHandler);
router.post('/login', login);
router.post('/logout', logout);
router.post('/updateuser', updateUser);
router.post('/approveuser', approveUser);
router.post('/deleteuser', deleteUser);
router.post('/updateprofile', updateProfile);

module.exports = router;