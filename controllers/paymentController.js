const Product = require("../models/Product");
const Payment = require("../models/PaymentSchema");
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

const payment = async(req,res)=>{
   try{
     const data = req.body;
      const paymentdata = {
       ...data,
       status:"success"
      }
      const newPayment = new Payment(paymentdata);
      await newPayment.save();

      //or const payment = await Payment.create(paymentdata);
      
      res.status(200).json({message:"Payment successful"});
   } catch (error) {
     res.status(500).json({message:error.message});
   }


}

const getPayments = async (req,res)=>{
  try{
    const {email} = req.body;
     const payments = await Payment.find({email});
     res.status(200).json({payments});

  }
  catch(error){
      res.status(500).json({message:error.message});
  }
}

module.exports = { CreatePayment ,payment, getPayments};