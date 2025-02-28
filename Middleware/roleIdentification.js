import User from "../models/userModal.js";

export const admin= (req, res, next) =>{
if (req.user.userRole !=="admin"){
    return res.status(403).json({message:"Access denied, please contact admin"})
}
next();
};