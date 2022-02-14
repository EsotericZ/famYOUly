const router = require('express').Router();
const {
	addChild,
	updateChild,
} = require('../../../controllers/childController');

router.post('/createchild', addChild);
router.post('/updatechild', updateChild);

module.exports = router;