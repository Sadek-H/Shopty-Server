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

const getAllVendors = async(req,res)=>{

  const vendors = await vendorSchema.find();
    res.status(200).json({success:true, vendors});

}

const updateVendorstatus = async(req,res)=>{
  try{
      const {id} = req.params;
      const {status} = req.body;
      const vendor = await vendorSchema.findByIdAndUpdate(id, {status}, {new:true});
      if(!vendor){
        return res.status(404).json({success:false, message:"Vendor not found"});
      }
      res.status(200).json({success:true, vendor});

  }
  catch(error){
    res.status(500).json({success:false, message:"Internal Server Error"})
  }
}

module.exports = {createVendor, getAllVendors, updateVendorstatus};