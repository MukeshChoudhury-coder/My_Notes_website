const notesDB = require('../Schema/notesschema')

const  sendSubjectName=async(req, res)=>{
const userid= req.use.userId

try{
const notes= await notesDB.find({ usersID:userid})

if(notes.length===0){
    res.status(400).json([])
}else{
   let subName={}

    for(let sub of notes){
      if(subName[sub.subject]!==undefined){
        subName[sub.subject]++
      }else{
        subName[sub.subject]=1
      }
    }


    let name= Object.keys(subName).map((e)=>{
        return {subject:e}
    })
   res.status(200).json(name)
}
}catch{
    res.status(400).json({message:"something wenty wrong"})
}
}


module.exports = sendSubjectName


/**
 * const notesDB = require('../Schema/notesschema')

const  sendSubjectName=async(req, res)=>{
const userid= req.use.userId

try{
const notes= await notesDB.find({ usersID:userid})

if(notes.length===0){
    res.status(400).json({message:" empty!"})
}else{
   
    subjectNameArray(notes)
}
}catch{
    res.status(400).json({message:"something wenty wrong"})
}
}

function subjectNameArray(req, res,notes){
    let subName={}

    for(let sub of notes){
      if(subName[sub.subject]!==undefined){
        subName[sub.subject]++
      }else{
        subName[sub.subject]=1
      }
    }

   res.status(200).json(subName)
}
 */