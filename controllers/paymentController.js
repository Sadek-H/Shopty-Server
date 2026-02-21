const Product = require("../models/Product");
const Stripe = require("stripe");
const stripe = Stripe(process.env.PAYMENT_KEY);

const CreatePayment = async (req, res) => {
  try {
    const { id } = req.body;
 console.log("Body:", req.body);
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: product.price * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { CreatePayment };