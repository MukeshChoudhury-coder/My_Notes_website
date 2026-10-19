import  notesDB  from "../Schema/notesschema.js"

async function deleteNote(req, res){
 try{
  const noteId= req.query.noteId
 const userId= req.use.userId
   const result = await notesDB.deleteOne({usersID:userId , _id:noteId})
   console.log(result)
   
   if(result.deletedCount === 1){
  return   res.status(200).json({message:"note deleted successfully"})
   }
    return   res.status(404).json({message:"note not found"})
   
 }catch{
       res.status(501).json({message:"something went wrong"})
 }
}
 export default deleteNote