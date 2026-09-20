const  mongoose = require("mongoose")

const notesSchema= new mongoose.Schema({
    usersID:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    notes:{
        type:String,
        require:true
    }
})

const notesDB = mongoose.model("UsresNote", notesSchema)
module.exports = notesDB