import { createContact, getAllContact, getContactById } from "../Controllers/ContactController.js";
import express from "express";

const contactRouter=express.Router();
contactRouter.post("/createContact", createContact)
contactRouter.get("/getAllContact", getAllContact)
contactRouter.get("/:id", getContactById); 
export default contactRouter;