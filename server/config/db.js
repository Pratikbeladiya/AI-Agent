const mongoose = require('mongoose');

async function ConnectToDB(){

    await mongoose.connect(process.env.MONGODB_URI)
    .then (()=>{
        console.log(" MongoDB connected");
  }) .catch((err)=>{
    console.error(" MongoDB connection error:", err.message);
    process.exit(1); // stop the server if DB fails — no point running without it
    
  });
};


module.exports = ConnectToDB;