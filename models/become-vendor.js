const mongoose = require("mongoose");


const BecomevendorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone:{ type: String, required: true},
    Shopname:{ type: String, required: true},
    category: { type: String, required: true},
    address: { type: String, required: true},
    License: { type: String, required: true},
    status: { type: String, default: "pending" }
})

module.exports = mongoose.model("becomevendor", BecomevendorSchema);

 