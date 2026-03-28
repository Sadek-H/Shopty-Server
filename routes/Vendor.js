const router = require("express").Router();
const { createVendor } = require("../controllers/vendorController");

router.post("/becomevendors", createVendor);

module.exports = router;