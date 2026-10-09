const  mongoose = require("mongoose")

const connectDB= async()=>{
 try{
      await mongoose.connect(process.env.DataBase_Cluster)

        console.log("connected")
  
 }catch(err){
    console.log("not connected")
 }
  
}

 module.exports = connectDB;

 /**
  * 201 → Successfully created
400 → Bad request / invalid data
401 → Not authenticated
403 → Not authorized
404 → Resource/route not found
405 → HTTP method not allowed
409 → Conflict (e.g. email already exists)
500 → Server/unexpected error
  */