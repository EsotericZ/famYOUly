const router = require('express').Router();
const {
    addMedicalInfo,
    createContact,
    createList,
    renderInformation,
    setChild,
    getInformation,
    updateMedicalInfo,
    updateContact,
    updateList,
    deleteContact,
} = require('../../../controllers/informationController');

router.post('/medical', addMedicalInfo);
router.post('/updatemedical', updateMedicalInfo);
router.post('/contact', createContact);
router.post('/updatecontact', updateContact);
router.post('/deletecontact', deleteContact);

router.post('/list', createList);
router.post('/updatelist', updateList);
// router.post('/medication', addMedicalInfo)


// router.route('/')
//     .get(renderInformation);

router.route('/:childId')
    .get(getInformation);
    // .post(updateMedicalInfoById)
    // .post(updateContact)
    // .post(updateList);

router.route('/set')
    .post(setChild);

module.exports = router;