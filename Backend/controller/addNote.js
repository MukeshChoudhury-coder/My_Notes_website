const notesDB =  require("../Schema/notesschema")

const addNote= async(req, res)=>{
const usersID= req.use.userId
const {title, notes}= req.body

try{
  const addNote= await notesDB.create({usersID , title , notes})
       
        res.status(200).json({message:"note added"})
       console.log(addNote)
}catch{
    res.status(401).json({message:"something went wrong"})
}

}

module.exports= addNote