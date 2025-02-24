import { createProduct, getAllProduct, getProductById, deleteProductById, updateProductById } from "../Controllers/ProductController.js";
import express from "express";
import upload from "../Middleware/Multer.js";
const productRouter=express.Router();
productRouter.post("/createProduct", upload.single('productImage'), createProduct)
productRouter.get("/getAllProduct", getAllProduct)
productRouter.get("/:id", getProductById);  
productRouter.delete("/:id", deleteProductById); 
productRouter.put("/:id", updateProductById); 

export default productRouter;