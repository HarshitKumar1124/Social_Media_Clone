const express = require('express')
const dotenv = require('dotenv')


const app = express();

app.use(express.json());

dotenv.config({path:'./config.env'})



/* Using user Routes */
const userRoutes = require('./routes/userRoutes.js')
app.use('/api/v1',userRoutes)









/* Connection of MongoDB Database | ATLAS */
const connectDatabase = require('./Database.js')

connectDatabase();

const PORT= process.env.PORT||4000;

const server = app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})
