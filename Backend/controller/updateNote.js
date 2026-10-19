import  notesDB from "../Schema/notesschema.js"

async function updateNote(req, res){
  try{
   const notes= req.body
   const userId= req.use.userId
    const updateNote= await notesDB.updateOne({usersID:userId,  _id:notes._id},{ $set: {
          subject: notes.subject,
          chapter: notes.chapter,
          notes: notes.notes,
        },})
 

    console.log(updateNote)
   if (updateNote.matchedCount === 0) {
  return res.status(404).json({
    message: "Note not found",
  });
}else if (updateNote.matchedCount === 1) {
  return res.status(200).json({
    message: "Note updated!",
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
export default updateNote

/** */