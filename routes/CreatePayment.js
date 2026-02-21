const {CreatePayment} = require('../controllers/paymentController');
console.log('paymentController:', CreatePayment);
const router = require('express').Router();

router.post("/create-payment", CreatePayment);
module.exports = router;