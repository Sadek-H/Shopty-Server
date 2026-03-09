const mongoose = require("mongoose");


const BecomevendorSchema = new mongoose.Schema({
    address: { type: String, required: true},
    category: { type: String, required: true},
    email: {type: String, required: true, unique: true},
    fullName: {type: String, required: true},
    license: { type: String, required: true},
    phone:{ type: String, required: true},
    shopName:{ type: String, required: true},
    status: { type: String, default: "pending" }
})

module.exports = mongoose.model("becomevendor", BecomevendorSchema);

 