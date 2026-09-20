const userDB= require("../Schema/userschema")
const  bcrypt = require ("bcrypt")
const jwt= require("jsonwebtoken")

const login =async(req, res)=>{

    const {email, password}= req.body

    const data= await userDB.findOne({email})
    if(!data){
        res.status(400).json({message:"Invalid Email"})
    }
  
   try{
     const checkPassword= await bcrypt.compare( password,data.password)

     if(checkPassword){
        const token= jwt.sign({userId:data.id} , process.env.JWT_SECRET, {expiresIn:"1h"})
     res.cookie("accessToken", token, {httpOnly:true })
      res.status(201).json({message:"Login in successfully"})
     }else{
          res.status(400).json({message:"Incorrect Password"})
     }
          
     
   }catch(err){
     return res.status(404).json({message:"something went wrong"})
   }


}
module.exports=login