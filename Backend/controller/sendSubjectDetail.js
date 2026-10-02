const notesDB = require("../Schema/notesschema")

async function sendSubDetails(req, res){
 const subject= req.query.sub
 console.log(subject)
}

module.exports= sendSubDetails