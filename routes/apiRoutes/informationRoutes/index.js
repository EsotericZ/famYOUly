const router = require('express').Router();
// const {
// 	createInformation,
//     renderInformation,
// } = require('../../../controllers/informationController');
const {
    createContact,
    getAllContacts,
} = require('../../../controllers/contactController');
const {
    addMedicalInfo,
} = require('../../../controllers/medicalController');
const {
    createList,
} = require('../../../controllers/listController');

// router.route('/')
//     .get(renderInformation);

// contact
router.post('/contact', createContact);
router.get('/contact', getAllContacts);

// medical
router.post('/medical', addMedicalInfo);
// get medical info
// router.get('/medical', )

// list
router.post('/list', createList);
// get list info
// router.get('/list', )

// router.route('/info/')
//     .post(createInformation)
//     .post(createContact)
//     .post(addMedicalInfo)
//     .post(createList)
//     .get(getAllContacts)

module.exports = router;