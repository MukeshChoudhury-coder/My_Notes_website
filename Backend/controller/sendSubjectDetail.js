const notesDB = require("../Schema/notesschema")

async function sendSubDetails(req, res){
 const userSubject= req.query.sub
 
 try{
    const subjects= await notesDB.find({subject:userSubject})
    
 res.status(200).json(subjects)
 }catch(err){
    console.log(err)
 }
}

module.exports= sendSubDetails