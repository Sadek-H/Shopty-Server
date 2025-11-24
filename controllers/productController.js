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
       const {subcategory,price,skip,limit} = req.query;
       const skipNum = Number(skip);
       const limitNum = Number(limit);
       const query = {};
        if(subcategory){
           query.subcategory = { $regex: subcategory, $options: "i" };
          
        }
        if(price){
          if(price=="under50"){
            query.price = {$lt:50};
          }
        else  if(price=="50to200"){
            query.price = {$gt:50};
          }
        else  if(price=="above200"){
            query.price = {$gt:200};
          }
          


        }
       
       const product = await Product.find(query).skip(skipNum).limit(limitNum);
       const totalcount = await Product.countDocuments(query);
       console.log("Final res send",{totalcount, product});
       res.json({totalcount, product});
    }
    catch (error){
        res.status(500).json({success:false, message: error.message});
    }
}
module.exports = {createProduct, getProduct};