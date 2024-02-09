const friendRequestSchema = require('../schema/friendRequestSchema')
const userSchema = require('../schema/userSchema')

exports.sendFriendRequest = async(req,res)=>{

    const sender = req.user._id;
    const receiver = req.params.id;

    if(!sender || !receiver)
    {
        res.status(401).send({
            requestStatus:false,
            message:'Sender and Receiver user id must not be empty!'
        })

        return new Error('Sender and Receiver user id must not be empty!')
    }

    if(sender === receiver)
    {
        res.status(401).send({
            requestStatus:false,
            message:'Sender and Receiver user id must not be same!'
        })

        return new Error('Sender and Receiver user id must not be same!')
    }

    
    try{

        const target = await userSchema.findById({_id:receiver})

        if(!target)
        {
            res.status(500).send({
                requestStatus:false,
                message:"Unable to find the receiver's id! i.e. target user might have deleted/deactivated his/her account!"
            })

            return new Error("Unable to find the receiver's id! i.e. target user might have deleted/deactivated his/her account!")
        }

        await friendRequestSchema.create({
            sender,
            receiver,
        })

        res.status(200).send({
            requestStatus:true,
            message:`Friend request sent successfully to ${target.firstName + target.lastName}`
        })
    }catch(error)
    {
        res.status(500).send({
            requestStatus:false,
            message:`Unable to send friend request due to ${error}`
        })

        return new Error(`Unable to send friend request due to ${error}`)
    }



}


exports.getAllFriendRequests = async(req,res) =>{

    try{

        const requests = await friendRequestSchema.find({receiver:req.user._id});

        res.status(200).send({
            getRequestsStatus:true,
            requests
        })
    }catch(error)
    {
        res.status(500).send({
            getRequestsStatus:false,
            message:`Unable to fetch Friend Requests due to  ${error}`
        })

        return new Error(`Unable to fetch Friend Requests due to  ${error}`)
    }
}


exports.getAllSendFriendRequests = async(req,res)=>{

    try{

        const requests = await friendRequestSchema.find({sender:req.user._id});

        res.status(200).send({
            getSendRequestsStatus:true,
            requests
        })
    }catch(error)
    {
        res.status(500).send({
            getSendRequestsStatus:false,
            message:`Unable to fetch Send Friend Requests due to  ${error}`
        })

        return new Error(`Unable to fetch send Friend Requests due to  ${error}`)
    }

}