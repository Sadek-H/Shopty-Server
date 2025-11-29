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
       const {subcategory,price,skip,limit=3,search} = req.query;
       const query = {};
       const skipNum = Number(skip);
       const limitNum = Number(limit);
        if(search){
          query.$or = [
            {name: { $regex: search, $options: "i"}},
            {category: { $regex: search, $options: "i"}},
            {subcategory: { $regex: search, $options: "i"}},
          ]
        }
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
       
        
       const totalcount = await Product.countDocuments(query);
       const product = await Product.find(query).skip(skipNum).limit(limitNum);
      // console.log("Final res send",{totalcount, product});
       res.json({totalcount, product});
    }
    catch (error){
        res.status(500).json({success:false, message: error.message});
    }
}
module.exports = {createProduct, getProduct};