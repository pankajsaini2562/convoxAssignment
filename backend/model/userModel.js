import mongoose from 'mongoose'
const contactSchema=new mongoose.Schema({
// contact for defining the model for contacts
  name:{
    type:String,
    required:true
  },
  phoneNumber:{
    type:String,
    required:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  address:{
    type:String,
    required:true
  }

})

const Contact = mongoose.model('Contact',contactSchema)
export default Contact