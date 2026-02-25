const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    cartId: {type: String, required: true, unique: true},
    cartname: {type: String, required: true},
    subcategory : {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    image : {type: Array, required: true}

})

module.exports = mongoose.model('cart', cartSchema);