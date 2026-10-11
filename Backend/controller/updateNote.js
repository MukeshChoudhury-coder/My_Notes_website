const notesDB= require("../Schema/notesschema")

async function updateNote(req, res){
 const notes= req.body

 try{
    const updateNote= await notesDB.updateOne({_id:notes._id},{ $set: {
          subject: notes.subject,
          chapter: notes.chapter,
          notes: notes.notes,
        },})
 

    console.log(updateNote)
   if (updateNote.matchedCount === 0) {
  return res.status(404).json({
    message: "Note not found",
  });
}

if (updateNote.modifiedCount === 0) {
  return res.status(200).json({
    message: "No changes made",
  });
}
    
 }catch(err){
    console.log(err)
 }
}
module.exports=updateNote