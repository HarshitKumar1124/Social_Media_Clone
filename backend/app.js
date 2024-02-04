const express = require('express')
const dotenv = require('dotenv')


const app = express();

app.use(express.json());

dotenv.config({path:'./config.env'})



/* Using user Routes and userMiddleware*/
const userRoutes = require('./routes/userRoutes.js')
app.use('/api/v1',userRoutes)


module.exports = app