const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { loginView, signupView, renderHome, renderWaiting, renderProfile, renderCalendar } = require('../controllers/userController');
const { getInformation } = require('../controllers/informationController');
const { createFamilyView, myFamily } = require('../controllers/familyController');
const { getAllTodos } = require('../controllers/todoController');
// const { renderCalendar } = require('../controllers/calendarController');

router.get('/', loginView);
router.get('/login', loginView);
router.get('/signup', signupView);
router.get('/homepage', renderHome);
router.get('/createfamily', createFamilyView);
router.get('/myfamily', myFamily);
router.get('/waitingapproval', renderWaiting);
router.get('/profile', renderProfile);
router.get('/todo', getAllTodos);
router.get('/calendar', renderCalendar);


router.get('/info', getInformation);

router.use('/api', apiRoutes);

module.exports = router;