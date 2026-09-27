
async function logOut(req, res){  

try{
     await  res.clearCookie("accessToken",  {httpOnly:true})
   
 
    res.status(201).json({message: "logged Out"})

}catch{
    return res.status(404).json({message:"something went wrong"})
}

}

module.exports=logOut