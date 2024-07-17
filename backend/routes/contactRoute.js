import express from 'express'
import {getContacts,postContact,updateContact,deleteContact} from '../controllers/contactController.js'
const router =express.Router()
router.get('/contact',getContacts)
router.post('/contact',postContact)
router.put('/contact:id',updateContact)
router.delete('/contact:id',deleteContact)
export default router