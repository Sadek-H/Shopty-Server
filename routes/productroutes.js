const { createProduct, getProduct, getProductById } = require("../controllers/productController");
// const express = require("express");
const upload = require("../middleware/upload");
const router = require("express").Router();
router.post('/products',upload.array("images", 4), createProduct);
router.get('/products', getProduct);
router.get('/products/:id', getProductById);
module.exports = router;