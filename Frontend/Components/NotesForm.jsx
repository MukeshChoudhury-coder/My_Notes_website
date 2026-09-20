import styles from '../Css_folder/NotesForm.module.css'
import { useContext } from 'react'
import { proContext } from '../Provider/Provider'
import { StickyNotePlus , Type , Pencil , Save} from "lucide-react"
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
               <p className={styles.createnotesmallmessage}>Write you thoughts, Ideas and keep them safe.</p>
            </div>
         </div>
        
       <form className={styles.noteForm}
       onSubmit={(e)=>{
        e.preventDefault();
        notesData()
        setUserNote({
    title: "",
    notes: ""
  });
       }}
       >
         <label className={styles.noteLabel}>
            <p className={styles.noteLabeltitle}>Title</p>
            <div className={styles.noteLabeldiv}>
                <Type size={30} strokeWidth={1.75}  color='#22C55E'/>
                <input type="text"  placeholder='Enter your Title...' className={styles.noteLabelinput}
                value={userNote.title}
                onChange={(e)=>setUserNote({...userNote, title:e.target.value})}
                 required></input>
            </div>
        </label>

        <label className={styles.noteLabel2}>
            <p className={styles.noteLabelcontent}>Content</p>
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