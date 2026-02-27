const { createCart, getCart } = require("../controllers/cartController");

const router = require("express").Router();

router.post("/dashboard/cart", createCart);
router.get("/cart", getCart);

module.exports = router;