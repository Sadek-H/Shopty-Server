const mongoose = require("mongoose");


const BecomeRidersSchema = new mongoose.Schema({
    fullName: { type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone:{ type: String, required: true},
    vehicleType: { type: String, required: true},
    licenseNumber: { type: String, required: true},
    status: { type: String, default: "pending" }
})

module.exports = mongoose.model("becomeriders", BecomeRidersSchema);