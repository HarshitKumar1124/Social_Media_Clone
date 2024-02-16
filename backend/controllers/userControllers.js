const userSchema = require('../schema/userSchema')
const fs = require('fs')
const tokenService = require('../service/tokenService.js')
const validator = require('validator')
const bcrypt = require('bcrypt')
const { Console } = require('console')


/* Creating New User*/
exports.userRegister=async(req,res)=>{

    const {
        firstName,
        lastName,
        email,
        password,
        profilePath,
        location,
        occupation
        } = req.body

    try{

        if(!firstName || !lastName || !email || !password )
        {
            res.status(400).send({
                createStatus:false,
                message:"All Stared Fields can't be empty!"
            })

            return new Error("All Stared Fields can't be empty!")
        }

        const NewUser = await userSchema.create({
            firstName,
            lastName,
            email,
            password,
            profilePath,
            location,
            occupation,
            visiblePassword:password

        })

        const accessToken = await tokenService.getAccessToken(NewUser._id)

        console.log('AccessToken is: ',accessToken)

        /* saving AccessToken in file system local disk */
        fs.writeFileSync('cookie_local_storage.txt',accessToken, function (err) {
            if (err) throw err;
            else
            console.log('Access Token Saved!');
        })

        res.status(200).send({
            createStatus:true,
            accessToken,
            message:'New user is registered!'
        })



    }catch(error)
    {
          res.status(500).send({
            createStatus:false,
            message:`Failed to create user due to ${error}`
          })

          return new Error(`Failed to create user due to ${error}`)
    }

}





/* User Login*/
exports.userLogin = async(req,res)=>{

    const {email,password} = req.body;

    try{

        if(!email || !password)
        {
            res.status(400).send({
                authStatus:false,
                user:null,
                message:"All fields are required!"

            })

            return new Error('All fields are required!')
        }

        if(!validator.isEmail(email))
        {
            res.status(401).send({
                authStatus:false,
                user:null,
                message:"Enter the valid email id!"
            })

            return new Error('Enter the valid email id!')


        }

        const userTarget = await userSchema.findOne({email})

        if(!userTarget){

            res.status(401).send({
                authStatus:false,
                user:null,
                message:"User not found!"
            })

            return new Error('User not found!')
        }

       
        const result = await bcrypt.compare(password,userTarget.password)

        if(!result)
        {
            res.status(404).send({
                authStatus:false,
                user:null,
                message:'Authorization credentials are invalid!'
            })

            return new Error('Authorization credentials are invalid!')
        }

        
        const accessToken = await tokenService.getAccessToken(userTarget._id)

        console.log('Login AccessToken is: ',accessToken)

       
        fs.writeFileSync('cookie_local_storage.txt',accessToken, function (err) {
            if (err) throw err;
            else
            console.log('Access Token Saved!');
        })

        // res.cookie("JWT_TOKEN",accessToken,{
        //     expires: new Date(Date.now() + 3600000),  // 1hrs
        //     httpOnly:true,
        //     secure:false //important so as to store cookie 
        // })

        

       

        res.status(200).send({
            authStatus:true,
            accessToken,
            user:userTarget,
            message:'Authorisation Successful!'
        })
    }
    catch(error)
    {
        res.status(500).send({
            authStatus:false,
            message:`User authorisation failed due to ${error}`
        })

        return new Error(`User authorisation failed due to ${error}`)
    }

}





/* userLogout */
exports.userLogout = async(req,res)=>{

    fs.writeFile('cookie_local_storage.txt',"",function(err){
        if(err) throw err;
        
    });

    // res.clearCookie("JWT_TOKEN")
    


    // console.log(res.cookies,req.cookies)

    res.status(200).send({
        authStatus:false,
        user:null,
        message:"Logged out successfully!"
    })

}



/*LoadUser if Authorised */
exports.userLoad = async(req,res)=>{

    res.status(200).send({
        authStatus:true,
        user:req.user,
        message:"User Information Loaded!"
    })
}




/* userGetFriends if Authorised */
exports.userGetFriends = async(req,res)=>{

    try{

        const {friends} = await userSchema.findById(req.user._id);

        res.status(200).send({
            getFriendsStatus:true,
            friends,
        })
    }
    catch(error)
    {
        res.status(500).send({
            getFriendsStatus:false,
            message:`Unable to fetch friends list currently due to ${error}`
        })

        return new Error(`Unable to fetch friends list currently due to ${error}`)
    }

}



/* Get All Users*/
exports.getAllUsers = async(req,res)=>{

    try{

        const users = await userSchema.find();

        res.status(200).send({
            getUserStatus:true,
            users
        })
    }catch(error)
    {
        res.status(500).send({
            getUserStatus:false,
            message:`Unable to fetch the users due to ${error}`
        })

        return new Error(`Unable to fetch the users due to ${error}`)
    }
}


