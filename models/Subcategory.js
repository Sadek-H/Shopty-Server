const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
    Electronics: [String],
    Books: [String],
    Fashion: [String],
    Gaming: [String],
})
module.exports = mongoose.model('subcategory', subcategorySchema);