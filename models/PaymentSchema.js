const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
             transactionId: {type: String, required: true, unique: true},
            amount: {type: Number, required: true},
            currency: {type: String, required: true},
            paymentMethod: {type: String, required: true},
            status: {type: String, required: true},
            createdAt: {type: Date, default: Date.now}
})
module.exports = mongoose.model('payment', paymentSchema)


