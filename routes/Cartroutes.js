const { createCart } = require("../controllers/cartController");

const router = require("express").Router();

router.post("/dashboard/cart", createCart);

module.exports = router;