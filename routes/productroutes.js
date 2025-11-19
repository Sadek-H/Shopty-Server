const { createProduct } = require("../controllers/productController");
// const express = require("express");
const upload = require("../middleware/upload");
const router = require("express").Router();
router.post('/',upload.array("images", 4), createProduct);

module.exports = router;