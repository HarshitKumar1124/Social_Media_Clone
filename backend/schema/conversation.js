const mongoose = require('mongoose')
const ConversationSchema = new mongoose.Schema({

   participants:[{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"Users"
   }],
   lastMessage:{
    sender:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"Users"
    },
    message:{
        type:String,
        default:""
    }
   }

},{
    timestamps:true
})


module.exports = new mongoose.model('conversations',ConversationSchema)



// iv = Initialisation Vector that is used to encryption/decryption of message