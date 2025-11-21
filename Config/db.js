const mongoose = require('mongoose');
const connectDB = async ()=>{
    try{
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.t5n91s9.mongodb.net/shopty?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("MongoDB connected successfully");
    }

    catch(error){
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}

module.exports = connectDB;