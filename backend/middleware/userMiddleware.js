
/* Using Multer to store the uploaded Files in Disk Drives*/
const multer = require('multer')
const fs = require('fs')
const UserSchema = require('../schema/userSchema')

const storageName = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/profiles");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storageName})
const jwt = require('jsonwebtoken')


exports.uploadProfile = async(req,res,next)=>{

    await upload.single("picture")

}


exports.IsAuth=async(req,res,next)=>{

    // const token = fs.readFileSync('cookie_local_storage.txt',"utf8")
    const token = req.cookies.JWT_TOKEN
    // console.log('CHECK...',req.cookies)

    if(!token)
    {
        res.status(401).send({
            authStatus:false,
            message:'No Authorised user!'
        })

        return new Error('No Authorised user!')
    }
     
    try{
   
    const result = jwt.verify(token,process.env.JWT_Secret)


    const loginUserInfo= await UserSchema.findById(result.id) 

    req.user=loginUserInfo;

    next();
         
   }catch(error)
   {
        res.status(401).send({
            authStatus:false,
            message:`Not authorised due to ${error}`
        })

        return new Error(`Not authorised due to ${error}`)
   }
}
