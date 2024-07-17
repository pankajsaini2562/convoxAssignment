import Contact from '../model/userModel.js'
export const getContacts = async(req,res) =>{
// code to get all contacts imformation from database
  try{
    const contacts =await Contact.find({})
    res.status(200).json({contacts})

  }
  catch(error){
res.status(500).json({message:error.message})
  }

}
export const postContact = async(req,res)=>{
// code to post the data into database

  try{
    const newContact = new Contact({name:req.body.name ,phoneNumber:req.body.phoneNumber,email:req.body.email,address:req.body.address})
    const savedContact =await newContact.save()
    res.status(200).json({savedContact})


  }
  catch(error){
res.status(500).json({message:error.message})
  }
}

// code for update contact into database
export const updateContact = async(req,res)=>{
  const Id= req.params.id
  const updatecontact = {
    name :req.body.name,
    phoneNumber:req.body.phoneNumber,
    email:req.body.email,
    address:req.body.address,
    
  }
 
  try{
    const updatedContact = await Contact.findByIdAndUpdate(Id,updatecontact)
    if(!updatedContact){
return res.status(400).json({message:'Contact not found'})
    }
    res.status(201).json({updatedContact})

  }
  catch(error){
res.status(500).json({message:error.message})
  }
}

// code for delete the contact the data from database
export const deleteContact = async(req,res)=>{
  const Id=req.params.id
  try{
const deletedContact =await Contact.findByIdAndDelete(Id)
if(!deletedContact){
  return res.status(400).send({message:'Contacts not found'})
}
res.status(200).json({message:'Contact deleted succesfully'})
  }
  catch(error){
res.status(500).json({message:error.message})
  }
}


