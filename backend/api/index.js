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

mongoose.connect(process.env.MONGO).then(()=>{
  console.log('Database is connected')
  app.listen(3000,()=>{
    console.log('server is running succesfully')
  })
})
.catch((err)=>{
  console.log(err)
})

app.use('/api',contactRoutes)