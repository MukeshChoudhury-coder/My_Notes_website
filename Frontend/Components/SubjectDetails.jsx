import Navbar from "./Navbar"
import styles from "../Css_folder/SubjectDetail.module.css"
import {ArrowLeft , Search , ChevronRight , Trash} from "lucide-react"
import {ClipLoader } from "react-spinners";
import {useContext} from 'react'
import { proContext } from '../Provider/Provider';
function SubjectDetails(){
    const {Notes, spin , deleteNote, backNavigation, getChapterDetails,navigate, message , messagePopup , setSearch, getSearch, search}=useContext(proContext)
    return (
        <>
      <div className={styles.container}>
        <Navbar />

           <div className={styles.popupmessage}
                           style={{  visibility: messagePopup==="true" ?  "visible":"hidden",}} >
                                      <p className={styles.popupmessagep}>{message}</p>
                                     </div>
        <div className={styles.container2}>
            <div className={styles.gobackicon} onClick={()=>backNavigation()} >
             <ArrowLeft color="#F5F7F6" />
             <p> Back</p>
           </div>

             <form className={styles.inptsearch}  onSubmit={(e)=>{
              e.preventDefault(),
              getSearch(),
              setSearch("")
             }}>
                             <Search color="#4ADE80" />
                         <input type="Text" placeholder='Search your notes.....' className={styles.searchinpt} 
                         value={search}
                         onChange={(e)=>setSearch(e.target.value)}
                         />
                       </form>

            <div className={styles.subjects}>
              {spin==="enable"? <ClipLoader color="#22C55E"size={40}/> : (<>
               <div className={styles.chapterContainer}>
                 {Notes.length===0? <p className={styles.notFoundmessage}>"not found</p> :  Notes.map((e)=>{
                return <div  className={styles.chaptersdiv} key={e._id} onClick={()=>{getChapterDetails(e._id) ,   navigate(`/chapterdetail/${e._id}`);}}>
                 <div className={styles.chapterchild3}><p className={styles.chapterchild3p}> {e.subject}</p></div>
                   <div className={styles.chapterchild1}>
                       <p className={styles.chapterp}>{e.chapter}</p>
                       <ChevronRight strokeWidth={1.75} color="#F5F7F6" />
                   </div>
                   <div className={styles.chapterchild2} >
                    <Trash strokeWidth={2.75}  size={20} color="#22C55E"   onClick={(event) => {event.stopPropagation(); deleteNote(e._id);}}/>
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
