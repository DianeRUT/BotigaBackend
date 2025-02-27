import { createContact, getAllContact, getContactById, deleteContactById, updateContactById } from "../Controllers/ContactController.js";
import express from "express";
import { admin } from "../Middleware/roleIdentification.js";
import { auth } from "../Middleware/tokenVerification.js";
const contactRouter=express.Router();
contactRouter.post("/createContact", createContact)
contactRouter.get("/getAllContact",auth, admin,  getAllContact)
contactRouter.get("/:id", admin, auth, getContactById); 
contactRouter.get("/:id", admin, auth, getContactById ); 
contactRouter.delete("/:id",admin, auth, deleteContactById ); 
contactRouter.put("/:id", admin, auth, updateContactById); 

export default contactRouter;