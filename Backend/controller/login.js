import userDB from "../Schema/userschema.js"
import  bcrypt from  "bcrypt"
import jwt from "jsonwebtoken"

const login =async(req, res)=>{
  
   try{
    const {email, password}= req.body

    const data= await userDB.findOne({email})
    if(!data){
      return   res.status(400).json({message:"Invalid Email"})
    }


     const checkPassword= await bcrypt.compare( password,data.password)

     if(checkPassword){
        const token= jwt.sign({userId:data.id} , process.env.JWT_SECRET, {expiresIn:"1h"})
     res.cookie("accessToken", token, {httpOnly:true })
    return   res.status(201).json({message:"Login in successfully"})
     }else{
         return  res.status(400).json({message:"Incorrect Password"})
     }
          
     
   }catch(err){
     return res.status(500).json({message:"something went wrong"})
   }


}
export default login