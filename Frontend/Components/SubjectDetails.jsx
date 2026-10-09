import Navbar from "./Navbar"
import styles from "../Css_folder/SubjectDetail.module.css"
import {ArrowLeft , Search , ChevronRight , Trash} from "lucide-react"
import {ClipLoader } from "react-spinners";
import {useContext} from 'react'
import { proContext } from '../Provider/Provider';
function SubjectDetails(){
    const {Notes, spin , deleteNote, backNavigation, getChapterDetails}=useContext(proContext)
    return (
        <>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.container2}>
            <div className={styles.gobackicon} onClick={()=>backNavigation()} >
             <ArrowLeft color="#F5F7F6" />
             <p> Back</p>
           </div>
             <form className={styles.inptsearch}>
                             <Search color="#4ADE80" />
                         <input type="Text" placeholder='Search your notes.....' className={styles.searchinpt}/>
                       </form>
            <div className={styles.subjects}>
              {spin==="enable"? <ClipLoader color="#22C55E"size={40}/> : (<>
               <div className={styles.chapterContainer}>
                 {Notes.map((e)=>{
                return <div  className={styles.chaptersdiv} key={e._id} onClick={()=>getChapterDetails(e._id)}>
                 <div className={styles.chapterchild3}><p className={styles.chapterchild3p}> {e.subject}</p></div>
                   <div className={styles.chapterchild1}>
                       <p className={styles.chapterp}>{e.chapter}</p>
                       <ChevronRight strokeWidth={1.75} color="#F5F7F6" />
                   </div>
                   <div className={styles.chapterchild2} >
                    <Trash strokeWidth={2.75}  size={20} color="#A7B3AD"  onClick={()=>deleteNote(e._id)}/>
                   </div>
                </div>
              })}
               </div>
              </>)}
            </div>
        </div>
      </div>
        </>
    )
}
export default SubjectDetails
