const router = require("express").Router();
const { createVendor, getAllVendors, updateVendorstatus } = require("../controllers/vendorController");

router.post("/becomevendors", createVendor);
router.get("/getvendors", getAllVendors);
router.patch("/approvevendor/:id", updateVendorstatus);

module.exports = router;