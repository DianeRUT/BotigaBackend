import express from "express";
import contactRouter from "./ContactPath.js";

const mainRouter=express.Router();

mainRouter.use("/contact", contactRouter)
export default mainRouter;