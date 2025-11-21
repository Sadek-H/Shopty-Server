const Product = require('../models/Product');

const createProduct = async (req,res)=>{
    try{
        // console.log(req.files);
        const data = req.body;
      //  console.log("body data", data);
        const images = req.files.map(file=> file.path);
      // console.log(images);
        const product = await Product.create({...data, images});
      //  console.log(product);
        res.status(201).json({success:true, product});
    } catch (error) {
        res.status(500).json({success:false, message: error.message});
    }
}
const getProduct = async (req,res)=>{
    try{
       
       const product = await Product.find({});
       console.log("hello data",product);
        res.json( product);
    }
    catch (error){
        res.status(500).json({success:false, message: error.message});
    }
}
module.exports = {createProduct, getProduct};