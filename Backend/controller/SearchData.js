import notesDB from "../Schema/notesschema.js"

async function sendSearch(req, res){
    try{
          const data= req.query.data
          const find= await notesDB.find({ chapter: {
    $regex: data,
    $options: "i"
  }})

        if(find.length===0){
            return res.status(200).json([])
        }else{
            return res.status(200).json(find)
        }
    }catch(err){
        console.log(err)
        res.status(501).json({message:"something went wrong"})
    }
}
export default sendSearch