import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import contactRoutes from '../routes/contactRoute.js'
import bodyParser from 'body-parser'
const app = express()
app.use(cors())
dotenv.config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// code for connect the node file to database 
mongoose.connect(process.env.MONGO).then(()=>{
  console.log('Database is connected')

  // code for start the express server
  app.listen(3000,()=>{
    console.log('server is running succesfully')
  })
})
.catch((err)=>{
  console.log(err)
})
// endpoint for contact management
app.use('/api',contactRoutes)