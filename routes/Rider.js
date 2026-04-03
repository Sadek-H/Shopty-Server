const { createRider } = require('../controllers/RiderController');
const router = require('express').Router();

router.post('/becomeRiders', createRider);

module.exports = router;