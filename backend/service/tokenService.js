const jwt = require('jsonwebtoken')


class tokenService {

    async getAccessToken(id){

        return await jwt.sign({id},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_Expires,
        })
    }
}

module.exports = new tokenService()