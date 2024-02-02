const userSchema = require('../schema/userSchema')
const fs = require('fs')
const tokenService = require('../service/tokenService.js')


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
        fs.writeFile('cookie_local_storage.txt',accessToken, function (err) {
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