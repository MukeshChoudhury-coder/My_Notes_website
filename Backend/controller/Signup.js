const userDB = require ("../Schema/userschema")
const jwt= require("jsonwebtoken")
const  bcrypt = require ("bcrypt")

const userSignUp=async(req, res)=>{
  const {name,email}=req.body
   const password=   await bcrypt.hash(req.body.password, 10)
   try{
         const checkEmail= await userDB.findOne({email})
         if(checkEmail){
            res.status(409).json({message:"Email already exists"})
         }else{
            const data= await userDB.create({name,email, password});
             const token= jwt.sign({userId:data.id}, process.env.JWT_SECRET, {expiresIn:"1h"})
            res.cookie("accessToken",token,{httpOnly:true } )
            res.status(201).json({message:"Account created successfully"})
         }
   }catch{
    res.status(501).json({message:"Something went wrong"})
   }
}
module.exports= userSignUp