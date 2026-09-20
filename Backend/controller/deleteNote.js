const notesDB = require("../Schema/notesschema")

const deleteNote=async(req, res)=>{
  const ID= req.query.id
  console.log(ID)

  try{
   const deletes= await notesDB.deleteOne({_id:ID})
 
   if(deletes){
     res.status(200).json({message:"Note deleted"})
   }
  }catch{
    res.status(500).json({message:"Server/unexpected error"})
  }
}
module.exports=deleteNote