

// using cloud hosted Database MongoDB - ATLAS

// cluster password -> hZfVSOEjMTpJ6EaD

// cluster User -> harshitkr1124

// mongodb+srv://harshitkr1124:hZfVSOEjMTpJ6EaD@dropinchatapp.nvx2nbf.mongodb.net/

const mongoose = require("mongoose");

const connectDatabase=()=>{

    // var DB_URI = "mongodb+srv://harshitkr1124:hZfVSOEjMTpJ6EaD@dropinchatapp.nvx2nbf.mongodb.net";
    mongoose.connect(process.env.DB_URI,{useNewURLParser:true}).then((data)=>{
        console.log(`MongoDB Cloud connected with the server: ${data.connection.host}`)}).catch((err)=>{
            console.log(`MongoDB Cloud Not Connected Error due to ${err}`);
        })
    


}
module.exports = connectDatabase;