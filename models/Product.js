const mongoose = require('mongoose');

const productScema = new mongoose.Schema({
    name: String,
    category: String,
    subcategory: String,
    price: Number,
    stock: Number,
    description: String,
    specifications: Array,
    createdAt: {type: Date, default: Date.now},
    isNewArrival: {type: Boolean, default: true},
    images: [String]

})
module.exports = mongoose.model('product', productScema);