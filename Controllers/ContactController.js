import Contact from "../Models/ContactModal.js";

export const createContact=async(req, res)=>{
    try{
const {names, email, subject, message, phone, status}=req.body;
    const newContact=new Contact({names, email, subject,message, phone, status});

    await newContact.save();


    res.status(201).json({success: true, message: "Contact created succefully", Contact:newContact})
}

    catch(error){
        res.status(500).json({success: false, message: "server error", error: error.message})
    }
}

export const getAllContact=async(req,res)=>{
    try{

        const contacts= await Contact.find()
        res.status(200).json({success:true, contacts})
    }
    catch(error){
res.status(500).json({success: false, message: "server error", error: error.message})
    }
}

export const getContactById = async (req, res) => {
    try {
        const { id } = req.params;
      const contacts = await Contact.findById(id);
  
      if (!contacts) {
        return res.status(404).json({ success: false, message: "Contact not found" });
      }
  
      res.status(200).json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  }

  export const deleteContactById = async (req, res) => {
    try {
      
      const id = req.params.id; 
  
      if (!id) {
        return res.status(400).json({ success: false, message: "Invalid ID" });
      }
  
      const deletedContact = await Contact.findByIdAndDelete(id);
  
      if (!deletedContact) {
        return res.status(404).json({ success: false, message: "Contact not found" });
      }
  
      res.status(200).json({ success: true, message: "Contact deleted successfully" });
    } catch (error) {

      console.error("Error deleting contact:", error); 
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  }

  export const updateContactById = async (req, res) => {
    try {
      console.log("Received request params:", req.params); 
      console.log("Received request body:", req.body); 
  
      const { id } = req.params; 
      const updatedData = req.body; 
  
      if (!id) {
        return res.status(400).json({ success: false, message: "Invalid ID" });
      }
  
      const updatedContact = await Contact.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
  
      if (!updatedContact) {
        return res.status(404).json({ success: false, message: "Contact not found" });
      }
  
      res.status(200).json({ success: true, message: "Contact updated successfully", contact: updatedContact });
    } catch (error) {
      console.error("Error updating contact:", error); 
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  };
  
  