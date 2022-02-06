const router = require('express').Router();
const userRoutes = require('./userRoutes');
const informationRoutes = require('./informationRoutes');

router.use('/users', userRoutes);
router.use('/info', informationRoutes);

module.exports = router;