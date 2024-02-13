
const ConversationSchema = require('../schema/conversation.js')
const MessageSchema = require('../schema/message.js')



exports.sendMessage = async(req,res)=>{

   try{

    const receiver = req.params.id;
    const sender = req.user._id;

    if(!req.body.message){

        res.status(404).send({
            messageStatus:false,
            message:"Message field can't be empty!"
        })

        return new Error("Message field can't be empty!")
    }

    if(sender===receiver){

        res.status(404).send({
            messageStatus:false,
            message:"You can't send message to yourself!"
        })

        return new Error("You can't send message to yourself")
    }

    if(!receiver || !sender)
    {
        res.status(401).send({
            createConversationStatus:false,
            messageStatus:false,
            message:"Sender and Receiver user target can't be empty!"
        })

        return new Error("Sender and Receiver user target can't be empty!")
    }

    let conversation = await ConversationSchema.findOne({participants:[sender,receiver]});

   

    if(!conversation){
        
        conversation = await ConversationSchema.create({
            participants:[sender,receiver],
            lastMessage:{
                sender,
                message:req.body.message
            }

        });

    }else{

        // update the latest conversation content.
        await conversation.updateOne({lastMessage:{sender,message:req.body.message}})
    }

  

    const {participants} = await conversation.populate("participants","firstName lastName")


    const messageInstance = await MessageSchema.create({
        conversation_id:conversation._id,
        content:req.body.message,
        sender:req.user._id,
        receiver:req.params.id
    })

    res.status(200).send({
        messageStatus:true,
        message:`Sent message to ${participants[1].firstName + " " +participants[1].lastName} successfully!`
    })





   }catch(error){

    res.status(500).send({
        createConversationStatus:false,
        message:`Unable to create new conversation due to ${error}`
    })

    return new Error(`Unable to create new conversation due to ${error}`)
   }

}










// get conversations with the all other users

exports.getConversations = async(req,res)=>{

    try{

        const AllConversations = await ConversationSchema.find({participants:{"$in":[req.user._id]}}).populate("participants","firstName lastName")

        res.status(200).send({
            getConversationStatus:true,
            AllConversations,
            message:`Conversations of ${req.user.firstName + " " + req.user.lastName } fetched successfully!`
        })
    }catch(error){
        res.status(501).send({
            getConversationStatus:false,
            AllConversations:[],
            message:`Unable to fetch the ${req.user.firstName + " " + req.user.lastName } conversation due to ${error}`
        })

        return new Error(`Unable to fetch the ${req.user.firstName + " " + req.user.lastName } conversation due to ${error}`)
    }

}



// get chat with the specific user

exports.getChats = async(req,res)=>{


    try{

        const target_Conversation = await ConversationSchema.findOne({participants:{"$in":[req.params.id,req.user._id]}})
        
        
        if(!target_Conversation){

            res.status(200).send({
                getChatsStatus:true,
                chats:[],
                message:"No chats to show!"
            })

            return 
        }

      
        const chats = await MessageSchema.find({conversation_id:target_Conversation._id})

        res.status(200).send({
            getChatsStatus:true,
                chats,
                message:"Chats fetched successfully!"
        })
    }catch(error){
        res.status(500).send({
            getChatsStatus:false,
            Chats:[],
            message:`Unable to fetch the chats due to ${error}`
        })

        return new Error(`Unable to fetch the chats due to ${error}`)
    }

}