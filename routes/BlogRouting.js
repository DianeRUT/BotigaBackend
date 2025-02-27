import express from "express";
import blogRouter from "./BlogPath.js"; 

const indexRouter=express.Router();

indexRouter.use("/blog", blogRouter)
export default indexRouter;