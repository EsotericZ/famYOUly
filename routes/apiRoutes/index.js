const router = require('express').Router();
const userRoutes = require('./userRoutes');

const informationRoutes = require('./informationRoutes');

const familyRoutes = require('./familyRoutes');


router.use('/families', familyRoutes);
router.use('/users', userRoutes);
router.use('/info', informationRoutes);

module.exports = router;