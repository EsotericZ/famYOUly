const router = require('express').Router();
const {
	createInformation,
    renderInformation,
} = require('../../../controllers/informationController');
const {
    createContact,
} = require('../../../controllers/contactController');

router.route('/info')
    .get(renderInformation)
    .post(createInformation);

module.exports = router;