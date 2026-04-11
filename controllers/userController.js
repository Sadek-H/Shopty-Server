const User = require('../models/User');

const registerUser = async (req,res)=>{
    try{
        const user = await User.create(req.body);
        console.log(user);
        res.status(201).json({success:true, user});
    }
    catch(error){
        res.status(500).json ({messagge:error.message})
    }
}

const getAllUser = async(req,res)=>{
    try{
        const users = await User.find();
         res.json(users);
    }
    catch(error){
        res.status(500).json ({messagge:error.message})
    }
}

const getUseremail = async(req,res)=>{
    try{
        const {email} = req.params;
        const user = await User.findOne({email});
        console.log("user",user);
        res.send(user);''
    }
    catch(error){
        res.status(500).json ({messagge:error.message})
    }
}

const updateUser = async(req,res)=>{
    try{
        const data = req.body;
        console.log("userdata",data);
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, data, {new:true});
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json ({messagge:error.message})
    }
}


module.exports = {registerUser, getAllUser, getUseremail,updateUser};