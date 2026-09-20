const notesDB = require('../Schema/notesschema')

const  sendNote=async(req, res)=>{
const userid= req.use.userId

try{
const notes= await notesDB.find({ usersID:userid})

if(notes.length===0){
    res.status(400).json({message:" empty!"})
}else{
    res.status(200).json(notes)
}
}catch{
    res.status(400).json({message:"something wenty wrong"})
}
}

module.exports = sendNote