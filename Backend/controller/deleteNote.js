const notesDB = require("../Schema/notesschema")

async function deleteNote(req, res){
 const noteId= req.query.noteId

 try{
   const result = await notesDB.deleteOne({_id:noteId})
   
   if(result.deletedCount === 1){
    res.status(200).json({message:"note deleted successfully"})
   }else{
       res.status(404).json({message:"note not found"})
   }
 }catch{
       res.status(501).json({message:"something went wrong"})
 }
}
 module.exports = deleteNote