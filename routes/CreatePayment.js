const {CreatePayment, payment, getPayments} = require('../controllers/paymentController');
console.log('paymentController:', CreatePayment);
const router = require('express').Router();

router.post("/create-payment", CreatePayment);
router.post("/payments", payment);
router.get("/orders/:email", getPayments);
module.exports = router;