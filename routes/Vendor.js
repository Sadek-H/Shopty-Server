const router = require('express').Router();
const vendorController = require("../controllers/vendorController");

router.post("/become-vendor", vendorController)