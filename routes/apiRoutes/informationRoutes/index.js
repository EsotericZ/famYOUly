const router = require('express').Router();
const {
	addMedicalInfo,
    createContact,
    createList,
    renderInformation,
    setChild,
    getInformation,
} = require('../../../controllers/informationController');

router.post('/medical', addMedicalInfo);
router.post('/contact', createContact);
router.post('/list', createList);

router.route('/')
    .get(renderInformation);

router.route('/:childId')
    .get(getInformation);

router.route('/set')
    .post(setChild);

// // contact
// router.post('/contact', createContact);
// router.get('/contact', getContactsByChildId);

// // medical
// router.post('/medical', addMedicalInfo);
// // get medical info
// // router.get('/medical', )

// // list
// router.post('/list', createList);
// get list info
// router.get('/list', )

// router.route('/info/')
//     .post(createInformation)
//     .post(createContact)
//     .post(addMedicalInfo)
//     .post(createList)
//     .get(getAllContacts)

module.exports = router;