const express = require('express')
const dotenv = require('dotenv')


const app = express();

app.use(express.json());

dotenv.config({path:'./config.env'})


/* for solving frontend to backend cross origin resource sharing requests*/
const cors = require('cors')
app.use(cors());


/*Storing Cookies */
const cookieParser = require('cookie-parser')
app.use(cookieParser())



/* Using user Routes and userMiddleware*/
const userRoutes = require('./routes/userRoutes.js')
app.use('/api/v1',userRoutes)


/* Using post Routes*/
const postRoutes = require('./routes/postRoutes.js')
app.use('/api/v1',postRoutes)


/* Using connectionRequest Routes*/
const connectionRoutes = require('./routes/connectionRequestRoutes.js')
app.use('/api/v1',connectionRoutes)



/* Using coversationMessage Routes*/
const conversationMessageRoutes = require('./routes/conversationMessageRoutes.js')
app.use('/api/v1',conversationMessageRoutes)


module.exports = app