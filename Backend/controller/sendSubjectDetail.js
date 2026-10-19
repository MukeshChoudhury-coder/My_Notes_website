import  notesDB  from "../Schema/notesschema.js"

async function sendSubDetails(req, res){
 try{
   const userSubject= req.query.sub
   const userId= req.use.userId
    const subjects= await notesDB.find({usersID:userId, subject:userSubject})
    
 res.status(200).json(subjects)
     console.log(subjects)
 }catch(err){
    console.log(err)
 }
}

export default sendSubDetails