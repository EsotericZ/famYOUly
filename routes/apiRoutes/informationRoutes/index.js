const router = require('express').Router();
const {
	renderInformation,
} = require('../../../controllers/informationController');

router.route('/info')
    .get(renderInformation);


module.exports = router;