const UserSchema = require('./schema/userSchema.js')
const friendRequest = require('./schema/friendRequestSchema.js')


const socketMap = {}; // map of {user_id:socket.id}   map of online users with their socket ids. (for real time communication)

exports.SocketEvents=async(io)=>{

    
    
    io.on('connection',async(socket)=>{

    // this function is run or setup when any instance of socket is created in ClientSide.
   


    const user_id = socket.handshake.query["user_id"]

    console.log('User Connected!',socket.id,user_id)


    // updating the value of socket_id in userschema
    if(user_id){
        await UserSchema.findByIdAndUpdate(user_id,{socket_id:socket.id,status:"Online"})
        socketMap[user_id] = socket.id;
    }

    io.emit('tellOnline',Object.keys(socketMap))  // send ids of online users in real time


    socket.on('disconnect',async()=>{

        console.log('User is disconnected! Server message')
        await UserSchema.findByIdAndUpdate(user_id,{socket_id:'',status:"Offline"})
        delete socketMap[user_id]
        io.emit('tellOnline',Object.keys(socketMap))

    
    })
    
})


}

exports.GetReceiverSocketId = (receivedId)=>{
    console.log('GetsocketId',receivedId)
    return socketMap[receivedId]
}