const router = require('express').Router();
const {
    addMedicalInfo,
    createContact,
    createList,
    setChild,
    getInformation,
    updateMedicalInfo,
    updateContact,
    deleteContact,
    // deleteList,
} = require('../../../controllers/informationController');

router.post('/medical', addMedicalInfo);
router.post('/updatemedical', updateMedicalInfo);
router.post('/contact', createContact);
router.post('/updatecontact', updateContact);
router.post('/deletecontact', deleteContact);
router.post('/list', createList);
// router.post('/deletelist', deleteList);

router.route('/:childId')
    .get(getInformation);

router.route('/set')
    .post(setChild);

module.exports = router;