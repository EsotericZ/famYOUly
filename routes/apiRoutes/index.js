const router = require('express').Router();
const userRoutes = require('./userRoutes');
const familyRoutes = require('./familyRoutes');

router.use('/families', familyRoutes);
router.use('/users', userRoutes);

module.exports = router;