const mongoose = require('mongoose')


const friendRequestSchema = new mongoose.Schema({

    sender:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    receiver:{

        type:mongoose.Schema.ObjectId,
        ref:"User"

    },


},{
    timestamps:true
})

module.exports = new mongoose.model('FriendRequest',friendRequestSchema);