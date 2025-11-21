const { createProduct, getProduct } = require("../controllers/productController");
// const express = require("express");
const upload = require("../middleware/upload");
const router = require("express").Router();
router.post('/products',upload.array("images", 4), createProduct);
router.get('/products', getProduct);
module.exports = router;