const app = require('./app.js')
const http = require('http')
const UserSchema = require('./schema/userSchema.js')
const friendRequest = require('./schema/friendRequestSchema.js')

const server = http.createServer(app)


const {Server} = require('socket.io')

const io = new Server(server)           // represents the server for socket io


/* Setting Up Functionality for the Socket.io */

io.on('connection',async(socket)=>{

    // this function is run or setup when any instance of socket is created in ClientSide.

    const user_id = socket.handshake.query["user_id"]

    console.log('User Connected! -> ',socket.id)

    
    // updating the value of socket_id in userschema
    if(user_id){
        await UserSchema.findByIdAndUpdate(user_id,{socket_id:socket.id,status:"Online"})
    }



    // Writing the socket Event Listeners */

    socket.on('friend_request',async(data)=>{

        console.log("friend_request ",data);

        // data = {to:"receiver id",from:"sender's id"}

        const receiver = await UserSchema.findById(data.to)
        const sender = await UserSchema.findById(data.from)

        // creating a new friend request

        await friendRequest.create({
            sender:data.from,
            receiver:data.to,
        })

        io.to(receiver.socket_id).emit('You have received the new friend request',{

            message:"New Friend Request Received!"

        })

        io.to(sender.socket_id).emit('You have sent the new friend request',{

            message:"New Friend Request Sent successfully!"

        })



    })

})



/* Second Event of accepting friend request*/
socket.on('accept_friend_request',async(data)=>{

    console.log('accepting friend request ',data);

    // data =  {request_id: "" }

    const request_target = await friendRequest.findById(data.request_id)

    console.log('friend Request instance data',request_target)

    const receiver = await UserSchema.findById(request_target.receiver)
    const sender = await UserSchema.findById(request_target.sender)

    sender.friends.push(request_target.receiver);
    receiver.friends.push(request_target.sender);

    await receiver.save({
        new:true,
    })

    await sender.save({
        new:true,
    })

    // now removing this request from database as it has been verdicted!

    await friendRequest.findByIdAndDelete(data.request_id);


    io.to(sender.socket_id).emit('Request Accepted',{
        message:"Request Accepted!"
    })

    io.to(receiver.socket_id).emit('You Accepted The Request!',{
        message:"You Accepted The Request!"
    })

  // kuch to socket close kiya but samajh nhi aaya kyu. dekhte hai

})










/* Connection of MongoDB Database | ATLAS */
const connectDatabase = require('./Database.js')

connectDatabase();





const PORT= process.env.PORT||4000;

server.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})
