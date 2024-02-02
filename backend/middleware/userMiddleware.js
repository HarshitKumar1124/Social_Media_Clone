
/* Using Multer to store the uploaded Files in Disk Drives*/
const multer = require('multer')

const storageName = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/profiles");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storageName})


class userMiddleware{

    async uploadProfile(req,res,next){

        await upload.single("picture")

    }


}


exports.module = new userMiddleware();