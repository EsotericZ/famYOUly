const router = require('express').Router();
const {
	createInformation,
    renderInformation,
} = require('../../../controllers/informationController');

router.route('/info')
    .get(renderInformation)
    .post(createInformation);

module.exports = router;