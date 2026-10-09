const notesDB = require("../Schema/notesschema")

async function sendChapter(req, res){
    const chapId= req.query.ID
    try{
        const chapter=  await notesDB.findOne({_id:chapId})
    res.status(200).json([chapter])
    }catch(err){
        res.status(501).json({message:"something went wrong"})
    }
}
module.exports = sendChapter