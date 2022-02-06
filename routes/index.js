const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { loginView, signupView, renderHome } = require('../controllers/userController');

const { createInformation, renderInformation } = require('../controllers/informationController');

const { createFamilyView } = require('../controllers/familyController');


router.get('/', loginView);
router.get('/login', loginView);
router.get('/signup', signupView);
router.get('/homepage', renderHome);
router.get('/createfamily', createFamilyView);

router.use('/api', apiRoutes);

module.exports = router;