const UserSchema = require('./schema/userSchema.js')
const friendRequest = require('./schema/friendRequestSchema.js')



exports.SocketEvents=async(io)=>{

    
    
    io.on('connection',async(socket)=>{

    // this function is run or setup when any instance of socket is created in ClientSide.
   


    const user_id = socket.handshake.query["user_id"]

    console.log('User Connected!',socket.id,user_id)


    // updating the value of socket_id in userschema
    if(user_id){
        await UserSchema.findByIdAndUpdate(user_id,{socket_id:socket.id,status:"Online"})
    }





    socket.on('disconnect',async()=>{

        console.log('User is disconnected! Server message')
        await UserSchema.findByIdAndUpdate(user_id,{socket_id:'',status:"Offline"})

    
    })
    
})


}