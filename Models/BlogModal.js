import mongoose from "mongoose";
const {model,Schema}=mongoose;

const blogSchema=new Schema(
    {
        title:{
        type: String,
        required:true
       },
       
       description:{
        type: String,
        required:true
       },

     
        date: { 
            type: Date, 
            required: true 
        },
      

       image:{
        type: Array,
        required:true
       },

    },
    {
        timestamps: true
    }
)
const Blog=model("Blog", blogSchema)
export default Blog;