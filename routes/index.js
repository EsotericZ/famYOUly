const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { loginView, signupView, renderHome } = require('../controllers/userController');

router.get('/', loginView);
router.get('/login', loginView);
router.get('/signup', signupView);
router.get('/homepage', renderHome);

router.use('/api', apiRoutes);

module.exports = router;