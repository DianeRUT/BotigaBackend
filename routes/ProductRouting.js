import express from "express";
import productRouter from "./ProductPath.js"; 

const appRouter=express.Router();

appRouter.use("/product", productRouter)
export default appRouter;