import Product from "../Models/ProductModal.js";
import cloudinary from "../Utils/Cloudinary.js";
export const createProduct=async(req, res)=>{
    try{
        console.log("CreateProduct controller reached");
        
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log("File received:", req.file);
        console.log("Cloudinary URL:", result.secure_url);

const {productName, productPrice, productCategory, productDiscount,productImage, status}=req.body;
    const newProduct=new Product({productName, productPrice, productCategory, productDiscount,productImage:result.secure_url, status});

    await newProduct.save();


    res.status(201).json({success: true, message: "Product created succefully", Product:newProduct})
}

    catch(error){
        res.status(500).json({success: false, message: "server error", error: error.message})
    }
}

export const getAllProduct=async(req,res)=>{
    try{

        const products= await Product.find()
        res.status(200).json({success:true, products})
    }
    catch(error){
res.status(500).json({success: false, message: "server error", error: error.message})
    }
}

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
      const products = await Product.findById(id);
  
      if (!products) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
  
      res.status(200).json({ success: true, products });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  }

  export const deleteProductById = async (req, res) => {
    try {
      
      const id = req.params.id; 
  
      if (!id) {
        return res.status(400).json({ success: false, message: "Invalid ID" });
      }
  
      const deletedProduct = await Product.findByIdAndDelete(id);
  
      if (!deletedProduct) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
  
      res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {

      console.error("Error deleting product:", error); 
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  }

  export const updateProductById = async (req, res) => {
    try {
      console.log("Received request params:", req.params); 
      console.log("Received request body:", req.body); 
  
      const { id } = req.params; 
      const updatedData = req.body; 
  
      if (!id) {
        return res.status(400).json({ success: false, message: "Invalid ID" });
      }
  
      const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
  
      if (!updatedProduct) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
  
      res.status(200).json({ success: true, message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
      console.error("Error updating product:", error); 
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  };
  
  