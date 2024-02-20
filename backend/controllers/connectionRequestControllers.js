const friendRequestSchema = require('../schema/friendRequestSchema')
const userSchema = require('../schema/userSchema')
const {GetReceiverSocketId} = require('../socketEvents.js')

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

        const requestInstance = await friendRequestSchema.create({
            sender,
            receiver,
            senderUsername:req.user.firstName + " "+ req.user.lastName,
            receiverUsername:target.firstName + " " + target.lastName
        })


        /* triggering socket.io event of receiving friend request for real time notification. */
        const receiverSocketId = GetReceiverSocketId(receiver)
   
        if(receiverSocketId)    // if receiver is online
        {
            console.log(receiverSocketId)
            console.log('real time friend request received notification bhejo ')
            global.io.to(receiverSocketId).emit('received_friend_request',requestInstance)

        }
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


/*send all connection requests , including received requests and sent requests */
exports.getConnectionRequests = async(req,res) =>{

    try{

        const requests = await friendRequestSchema.find({"$or":[{sender:req.user._id},{receiver:req.user._id}]});

        res.status(200).send({
            getRequestsStatus:true,
            requests
        })
    }catch(error)
    {
        res.status(500).send({
            getRequestsStatus:false,
            message:`Unable to fetch connection Requests due to  ${error}`
        })

        return new Error(`Unable to fetch connection Requests due to  ${error}`)
    }
}