const express = require('express')
const dotenv = require('dotenv')


const app = express();

app.use(express.json());

dotenv.config({path:'./config.env'})


/* for solving frontend to backend cross origin resource sharing requests*/
const cors = require('cors')
app.use(cors());



/* Using user Routes and userMiddleware*/
const userRoutes = require('./routes/userRoutes.js')
app.use('/api/v1',userRoutes)


/* Using post Routes*/
const postRoutes = require('./routes/postRoutes.js')
app.use('/api/v1',postRoutes)


/* Using connectionRequest Routes*/
const connectionRoutes = require('./routes/connectionRequestRoutes.js')
app.use('/api/v1',connectionRoutes)


module.exports = app