import { createContact, getAllContact, getContactById, deleteContactById, updateContactById } from "../Controllers/ContactController.js";
import express from "express";

const contactRouter=express.Router();
contactRouter.post("/createContact", createContact)
contactRouter.get("/getAllContact", getAllContact)
contactRouter.get("/:id", getContactById); 
contactRouter.get("/:id", getContactById); 
contactRouter.delete("/:id", deleteContactById); 
contactRouter.update("/:id", updateContactById); 

export default contactRouter;