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


/**
 * 
 *  <div className={styles.searchfiltersection}>
                 <div className={styles.inptsearch}>
                         <Search color="#4ADE80" />
                         <input type="Text" placeholder='Search by Subject.....' className={styles.searchinpt} 
                        />
                     </div>
 
                     <div className={styles.filter}>
                         <Funnel strokeWidth={1.20} size={20} color={'#F5F7F6'} />
                         <p style={{color:"#F5F7F6", fontFamily:"sans-serif" , fontSize:"15px"}} >Filter</p>
                         <ChevronDown strokeWidth={1.25} color={'#F5F7F6'}  size={25} />
                     </div>
                     <div className={styles.sort}>
                         <ArrowDownAZ strokeWidth={1} size={20} color={'#F5F7F6'} />
                         <p style={{color:"#F5F7F6", fontFamily:"sans-serif" , fontSize:"15px"}} >Sort</p>
                         <ChevronDown strokeWidth={1.25} color={'#F5F7F6'}  size={25} />
                     </div>
             </div>
 */