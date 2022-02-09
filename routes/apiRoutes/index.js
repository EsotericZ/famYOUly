const router = require('express').Router();
const userRoutes = require('./userRoutes');

const informationRoutes = require('./informationRoutes');
const childRoutes = require('./childRoutes');
const familyRoutes = require('./familyRoutes');
const todoRoutes = require('./todoRoutes');

router.use('/children', childRoutes);
router.use('/families', familyRoutes);
router.use('/users', userRoutes);
router.use('/info', informationRoutes);
router.use('/homepage', todoRoutes);

module.exports = router;