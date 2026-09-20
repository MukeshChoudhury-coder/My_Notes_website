const userDB= require("../Schema/userschema")

const homePage=async( req, res)=>{
const id= req.use.userId

try{
    const user= await userDB.findById(id);
    res.status(200). json(user)
}catch{
    res.stauts(501).json({message:"Something went wrong!"})
}
}
module.exports=homePage