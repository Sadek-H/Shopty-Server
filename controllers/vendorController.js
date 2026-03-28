const vendorSchema = require("../models/become-vendor");

const createVendor = async(req,res)=>{
    try{
        const data = req.body;
        console.log(data);
        const vendor = await vendorSchema.create(data);
        res.status(201).json({success: true, vendor});
    }
    catch(error){

      res.status(500).json({success:false, message:"Internal Server Error"})
    }
}

module.exports = {createVendor};