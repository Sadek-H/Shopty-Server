const cart = require('../models/Cartmodel');
const  createCart = async (req,res)=>{
    try{
        const data = req.body;
        const cart = new cart(data);
        await cart.save();
        res.status(201).json({success: true, cart});
    }
    catch (error){
        res.status(500).json({success:false, message: error.message});
    }
}

module.exports = {createCart}

