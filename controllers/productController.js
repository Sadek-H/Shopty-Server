const Product = require('../models/Product');

const createProduct = async (req,res)=>{
    try{
         console.log(req.files);
        const data = req.body;
        const images = req.files.map(file=> file.path);
       console.log(images);
        const product = await Product.create({...data, images});
        res.status(201).json({success:true, product});
    } catch (error) {
        res.status(500).json({success:false, message: error.message});
    }
}
module.exports = {createProduct};