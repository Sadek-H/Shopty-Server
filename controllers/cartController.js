const cart = require('../models/Cartmodel');
const  createCart = async (req,res)=>{
    try{
        const data = req.body;
        const carts = new cart(data);
        await carts.save();
        res.status(201).json({success: true, carts});
    }
    catch (error){
        res.status(500).json({success:false, message: error.message});
    }
}

const getCart = async (req,res)=>{
    try{
        const carts = await cart.find();
        res.status (200).json({success: true, carts});

    }
    catch(error){
        res.status(500).json({success:false, message: error.message});
    }
}

const deleteCart = async (req,res)=>{
    try{
        const {id} = req.params;
        const deletedcart = await cart.findByIdAndDelete(id);
        if(!deletedcart){
            return res.status(404).json({success:false, message: 'Cart not found'});
        }
        res.status(200).json({success: true, message: 'Cart deleted successfully'});
    }
    catch(error){
        res.status(500).json({success:false, message: error.message});
    }
}

module.exports = {createCart, getCart, deleteCart};

