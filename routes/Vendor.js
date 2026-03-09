const router = require("express").Router();
const vendorController = require("../controllers/vendorController");

router.post("/becomevendors", vendorController);

module.exports = router;
