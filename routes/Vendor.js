const router = require("express").Router();
const { createVendor, getAllVendors } = require("../controllers/vendorController");

router.post("/becomevendors", createVendor);
router.get("/getvendors", getAllVendors);

module.exports = router;