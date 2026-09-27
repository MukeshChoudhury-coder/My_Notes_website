const  mongoose = require("mongoose")

const notesSchema= new mongoose.Schema({
    usersID:{
        type:String,
        required:true
    },
   subject:{
        type:String,
        required:true
    },
    chapter:{
        type:String,
        require:true
    },
    notes:{
        type:String,
        require:true
    }
})

const notesDB = mongoose.model("UsresNote", notesSchema)
module.exports = notesDB