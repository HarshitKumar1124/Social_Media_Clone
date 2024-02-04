const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        min:2,
        max:50
    },
    lastName:{
        type:String,
        required:true,
        min:2,
        max:50
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail,"Please Enter The Valid Email"]
    },
    password:{
        type:String,
        required:true,
        
    },
    visiblePassword:{
        type:String,
        select:false
    },
    profilePath:{
        type:String,
        default:""
    },
    friends:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"User"
        }
    ],
    location:{
        type:String
    },
    occupation:{
        type:String
    },
    viewedProfile:{
        type:Number,
        default:0
    },
    impressions:{
        type:Number,
        default:0
    },
    socket_id:{
        type:String,
        default:""

    },
    status:{
        type:String,
        enum:["Online","Offline"]
    }
},{
    timestamps:true
})


/* it is a middleware that is hashing the password before saving/creating user*/
UserSchema.pre('save',async function(next){

    const hash = await bcrypt.hash(this.password,10);

    console.log('hashed password is :',hash)

    this.password = hash;
})




const User = mongoose.model("Users",UserSchema)

module.exports =  User