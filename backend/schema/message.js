const mongoose = require('mongoose')



const MessageSchema = new mongoose.Schema({

    conversation_id:{
         type:mongoose.Schema.ObjectId,
         required:true,
         ref:"conversations"
    },
    sender:{
        type:mongoose.Schema.ObjectId,
        ref:"users",
        required:true
    },
    receiver:{
        type:mongoose.Schema.ObjectId,
        ref:"users",
        required:true
    },
    content:{
        type:String,
        default:""
    },
   
},{
    timestamps:true
})


module.exports = new mongoose.model('messages',MessageSchema)