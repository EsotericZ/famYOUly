const router = require('express').Router();
const {
	addChild,
} = require('../../../controllers/childController');

router.post('/createchild', addChild);

module.exports = router;