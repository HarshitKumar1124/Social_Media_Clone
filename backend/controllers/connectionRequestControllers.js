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


/* Accepting the friend Request */
exports.acceptRequest = async(req,res) =>{

    const receiver = req.user._id;
    const sender = req.params.id;

    try{

        const target_request = await friendRequestSchema.findOne({sender,receiver});

        if(!target_request){
            res.status(401).send({
                acceptRequest:false,
                message:`Unable to accept friend Requests due to may be withdrawal of requests from user or due to ${error}`
            })
    
            return new Error(`Unable to accept friend Requests due to may be withdrawal of requests from user or due to ${error}`)
        }

        /* Updating the friendlist of both users */
      
        const user1 = await userSchema.findById(sender);
        const user2 = await userSchema.findById(receiver);

        let NewFriendList =user1.friends;
        NewFriendList.set(receiver,true)
        let NewFriendList2 = user2.friends;
        NewFriendList2.set(sender,true)

        // console.log(typeof(user1.friends),typeof(user2.friends),NewFriendList)

        const res1 = await userSchema.updateOne({_id:sender},{friends:NewFriendList})
        const res2 = await userSchema.updateOne({_id:receiver},{friends:NewFriendList2})

            console.log("Friend list of both sender and receiver is updated!")

            /* Here we need to remove the this request from FriendRequests Schema */

            const result = await friendRequestSchema.findByIdAndDelete(target_request._id)
            
        res.status(200).send({
            acceptRequest:true,
            message:'Friend Request of sender is accepted successfully!'
        })


    }catch(error)
    {
        res.status(500).send({
            acceptRequest:false,
            message: `Unable to accept friend connection Requests due to  ${error}`
        })

        return new Error(`Unable to accept friend connection Requests due to  ${error}`)
    }
}




/* Deleting the friend Request */
exports.deleteRequest = async(req,res) =>{

    try{

        const target_request = await friendRequestSchema.findOne({sender,receiver});

        if(!target_request){
            res.status(401).send({
                acceptRequest:false,
                message:`Unable to accept friend Requests due to may be withdrawal of requests from user or due to ${error}`
            })
    
            return new Error(`Unable to accept friend Requests due to may be withdrawal of requests from user or due to ${error}`)
        }

        /* Updating the friendlist of both users */
      
        const user1 = await userSchema.findById(sender);
        const user2 = await userSchema.findById(receiver);

        let NewFriendList =user1.friends;
        NewFriendList.set(receiver,true)
        let NewFriendList2 = user2.friends;
        NewFriendList2.set(sender,true)

        // console.log(typeof(user1.friends),typeof(user2.friends),NewFriendList)

        const res1 = await userSchema.updateOne({_id:sender},{friends:NewFriendList})
        const res2 = await userSchema.updateOne({_id:receiver},{friends:NewFriendList2})

            console.log("Friend list of both sender and receiver is updated!")

            /* Here we need to remove the this request from FriendRequests Schema */

            const result = await friendRequestSchema.findByIdAndDelete(target_request._id)
            
        res.status(200).send({
            acceptRequest:true,
            message:'Friend Request of sender is accepted successfully!'
        })


    }catch(error)
    {
        res.status(500).send({
            acceptRequest:false,
            message: `Unable to accept friend connection Requests due to  ${error}`
        })

        return new Error(`Unable to accept friend connection Requests due to  ${error}`)
    }
}