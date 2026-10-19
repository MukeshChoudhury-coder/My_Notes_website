import  notesDB from "../Schema/notesschema.js"

async function sendChapter(req, res){
    try{
         const chapId= req.query.ID
        const userId= req.use.userId
        const chapter=  await notesDB.findOne({usersID:userId,  _id:chapId})
        res.status(200).json(chapter)
    }catch(err){
        res.status(501).json({message:"something went wrong"})
    }
}
export default  sendChapter