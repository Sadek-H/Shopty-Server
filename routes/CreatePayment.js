const {CreatePayment, payment} = require('../controllers/paymentController');
console.log('paymentController:', CreatePayment);
const router = require('express').Router();

router.post("/create-payment", CreatePayment);
router.post("/payments", payment);
module.exports = router;