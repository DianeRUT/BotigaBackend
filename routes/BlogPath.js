import { createBlog, getAllBlog, getBlogById, deleteBlogById, updateBlogById } from "../Controllers/BlogControllers.js";
import express from "express";
import upload from "../Middleware/Multer.js";
const blogRouter=express.Router();
blogRouter.post("/createBlog", upload.single('image'), createBlog)
blogRouter.get("/getAllBlog", getAllBlog)
blogRouter.get("/:id", getBlogById);  
blogRouter.delete("/:id", deleteBlogById); 
blogRouter.put("/:id", updateBlogById); 

export default blogRouter;