import userDB from  "../Schema/userschema.js"
import jwt from "jsonwebtoken"
import  bcrypt from "bcrypt"

const userSignUp=async(req, res)=>{
   try{
       const {name,email}=req.body
        const password=   await bcrypt.hash(req.body.password, 10)
         const checkEmail= await userDB.findOne({email})
         if(checkEmail){
          return   res.status(409).json({message:"Email already exists"})
         }else{
            const data= await userDB.create({name,email, password});
             const token= jwt.sign({userId:data.id}, process.env.JWT_SECRET, {expiresIn:"1h"})
            res.cookie("accessToken",token,{httpOnly:true , secure: true,sameSite: "none",
  maxAge: 60 * 60 * 1000 } )
           return  res.status(201).json({message:"Account created successfully"})
         }
   }catch{
        console.error("SIGNUP ERROR:", err);
   return  res.status(501).json({message:"Something went wrong, please try again later"})
   }
}
export default  userSignUp