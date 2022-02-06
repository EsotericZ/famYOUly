const router = require('express').Router();
const {
	createFamily,
} = require('../../../controllers/familyController');

router.post('/createfamily', createFamily);

module.exports = router;