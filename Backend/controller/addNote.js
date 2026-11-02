import  notesDB from "../Schema/notesschema.js"

const addNote= async(req, res)=>{
try{
    const userId= req.use.userId
const {subject , chapter, notes}= req.body
     const addNote= await notesDB.create({usersID:userId , subject ,chapter, notes})
   
     if(addNote){
         return  res.status(200).json({message:"note added"})
     }
 
}catch{
    res.status(501).json({message:"something went wrong"})
}

}

export default  addNote