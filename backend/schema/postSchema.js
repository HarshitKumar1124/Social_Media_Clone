const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    createdBy:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"User"
    },
    firstName:{
        type:String,
       
    },
    lastName:{
        type:String
    },
    userPicturePath:{
        type:String,
        default:""
    },
    description:{
        type:String,
        required:true
    },
    postPicture:{
        type:String,
        default:""
    },
    likes:{
            type:Map,
            of:Boolean
        
    },
    comments:[
        {
            type:String
        }
    ]
    
},{
    timestamps:true
})


module.exports = new mongoose.model('Posts',postSchema)