const jwt= require("jsonwebtoken")
const middleware=(req,res,next)=>{
const getJwt= req.cookies.accessToken

if(!getJwt){
    res.status(403).json({message:" You are Not authorized"})
}else{
    try{
    const decode= jwt.verify(getJwt, process.env.JWT_SECRET)
req.use=decode
next()
}catch(error){
return res.status(401).json({message:"Invalid Token"})
}
}
}

module.exports=middleware