const { createCart } = require("../controllers/cartController");

const router = require("express").Router();

router.post("/cart", createCart);

module.exports = router;