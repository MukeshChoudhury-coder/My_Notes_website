import styles from '../Css_folder/NotesForm.module.css'
import { useContext } from 'react'
import { proContext } from '../Provider/Provider'
import { StickyNotePlus , BookOpenText , Pencil , Save , StickyNotes} from "lucide-react"
function NotesForm(){
    const {userData, userNote ,  setUserNote ,notesData}=useContext(proContext)
    return(
        <>
      <div className={styles.notesformbody} >
         <div className={styles.greetingmessage}>
            <p className={styles.greethello}>Hello, <span className={styles.greetname}>{userData.name}</span></p>
            <p className={styles.greetmessage}>Good to see you agauin! Create new notes</p>
         </div>
         <div className={styles.formcontainer}>
         <div className={styles.createnotecontainer}>
            <StickyNotePlus size={50} strokeWidth={1.75}  color='#22C55E'/>
           <div className={styles.createnote} >
            <p className={styles.create}>Create <span className={styles.notes}>Note</span></p>
               <p className={styles.createnotesmallmessage}>Add your Subject, Chaoter and Write you notes. Keep your study organized.</p>
            </div>
         </div>
        
       <form className={styles.noteForm}
       onSubmit={(e)=>{
        e.preventDefault();
        notesData()
        setUserNote({
     subject:"" , 
      chapter:"" , 
      notes:""
  });
       }}
       >
         <label className={styles.noteLabel}>

           <div className={styles.noteLabeldivs}>
             <p className={styles.noteLabeltitle}>Subject</p>
            <p className={styles.noteLabeltitletwo}>Enter the subject name (e.g. Computer Science, Physics, etc.)</p>
            <div className={styles.noteLabeldiv}>
                <BookOpenText strokeWidth={2} color='#22C55E' />
                <input type="text"  placeholder='Enter your Title...' className={styles.noteLabelinput}
                value={userNote.subject}
                onChange={(e)=>setUserNote({...userNote, subject:e.target.value})}
                 required></input>
            </div>
           </div>

            <div className={styles.noteLabeldivs}>
                  <p className={styles.noteLabeltitle}>Chapter</p>
            <p className={styles.noteLabeltitletwo}>Enter the chapter name (e.g. Data Structure,  Thermodynamics, etc)</p>
            <div className={styles.noteLabeldiv}>
                <StickyNotes strokeWidth={1.25}  color='#22C55E' />
                <input type="text"  placeholder='Enter your Title...' className={styles.noteLabelinput}
                value={userNote.chapter}
                onChange={(e)=>setUserNote({...userNote, chapter:e.target.value})}
                 required></input>
            </div>
            </div>
        </label>

        

        <label className={styles.noteLabel2}>
            <p className={styles.noteLabelcontent}>Your Notes</p>
            <div className={styles.noteLabeldiv2}>
               <Pencil size={30} strokeWidth={1} color='#22C55E' />
                <textarea type="text"  placeholder='Start writing your note here..' rows={10} className={styles.noteLabelinput2}
                 value={userNote.notes}
                onChange={(e)=>setUserNote({...userNote, notes:e.target.value})}
                required ></textarea>
            </div>
        </label>

         <button className={styles.savenotebtn}>
            <Save size={30} strokeWidth={1.25} />
            <p>Save note</p>
        </button>
       </form>
         </div>
      </div>
        </>
    )
}

export default NotesForm