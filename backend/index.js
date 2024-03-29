const app = require('./app.js')
const http = require('http')


const server = http.createServer(app)







/* Connection of MongoDB Database | ATLAS */
const connectDatabase = require('./Database.js')

connectDatabase();


/* ******************** SOCKET IO EVENTS **************************** */

const {Server} = require('socket.io')

const io = new Server(server,{
    cors:{
        methods:['GET','POST','PUT','PATCH'],
        origin:'http://localhost:3000',
         
        
    }
})           // represents the server for socket io

global.io = io

const {SocketEvents} = require('./socketEvents.js')

SocketEvents(io)




/********************************************************************************************** */

const PORT= process.env.PORT||4000;

server.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})


