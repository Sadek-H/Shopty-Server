const Subcategory = require('../models/Subcategory')

const getsubcategory = async (req,res)=>{
    try{
        const subcategory = await Subcategory.find();
        //console.log(subcategory);
        res.json(subcategory);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}
module.exports = {getsubcategory};