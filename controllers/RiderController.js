const RiderSchema = require('../models/become-riders');

const createRider = async(req,res)=>{
    try{
        const data = req.body;
        console.log(data);
        const rider = await RiderSchema.create(data);
        res.status(201).json({success: true, rider});
    }
    catch(error){
        res.status(500).json({success:false, message:"Internal Server Error"})
    }
}

module.exports = {createRider};