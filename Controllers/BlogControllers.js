import Blog from "../Models/BlogModal.js";
import cloudinary from "../Utils/Cloudinary.js";
export const createBlog=async(req, res)=>{
    try{
        console.log("Create Blog controller reached");
        
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log("File received:", req.file);
        console.log("Cloudinary URL:", result.secure_url);

const {title, description, date, image ,status}=req.body;
    const newBlog=new Blog({title, description, date , image:result.secure_url, status});

    await newBlog.save();


    res.status(201).json({success: true, message: "Blog created succefully", Blog:newBlog})
}

    catch(error){
        res.status(500).json({success: false, message: "server error", error: error.message})
    }
}

export const getAllBlog=async(req,res)=>{
    try{

        const blogs= await Blog.find()
        res.status(200).json({success:true, blogs})
    }
    catch(error){
res.status(500).json({success: false, message: "server error", error: error.message})
    }
}

export const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
      const blogs = await Blog.findById(id);
  
      if (!blogs) {
        return res.status(404).json({ success: false, message: "Blog not found" });
      }
  
      res.status(200).json({ success: true, blogs });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  }

  export const deleteBlogById = async (req, res) => {
    try {
      
      const id = req.params.id; 
  
      if (!id) {
        return res.status(400).json({ success: false, message: "Invalid ID" });
      }
  
      const deletedBlog = await Blog.findByIdAndDelete(id);
  
      if (!deletedBlog) {
        return res.status(404).json({ success: false, message: "Blog not found" });
      }
  
      res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {

      console.error("Error deleting blog:", error); 
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  }

  export const updateBlogById = async (req, res) => {
    try {
      console.log("Received request params:", req.params); 
      console.log("Received request body:", req.body); 
  
      const { id } = req.params; 
      const updatedData = req.body; 
  
      if (!id) {
        return res.status(400).json({ success: false, message: "Invalid ID" });
      }
  
      const updatedBlog = await Blog.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
  
      if (!updatedBlog) {
        return res.status(404).json({ success: false, message: "Blog not found" });
      }
  
      res.status(200).json({ success: true, message: "Blog updated successfully", blog: updatedBlog });
    } catch (error) {
      console.error("Error updating blog:", error); 
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  };
  
  