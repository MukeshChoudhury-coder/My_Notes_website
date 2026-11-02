import Navbar from "./Navbar"
import styles from "../Css_folder/SubjectDetail.module.css"
import {ArrowLeft , Search , ChevronRight , Trash} from "lucide-react"
import {ClipLoader } from "react-spinners";
import {useContext} from 'react'
import { proContext } from '../Provider/Provider';
import Message from "../Components/Message"
function SubjectDetails(){
    const {Notes, spin , deleteNote, backNavigation, getChapterDetails,navigate , setSearch, getSearch, search , message}=useContext(proContext)
    return (
        <>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.container2}>
            <div className={styles.gobackicon} onClick={()=>backNavigation()} >
             <ArrowLeft color="#F5F7F6" />
             <p> Back</p>
           </div>
           <Message />

             <form className={styles.inptsearch}  onSubmit={(e)=>{
              e.preventDefault(),
              getSearch(),
              setSearch("")
             }}>
                             <Search color="#4ADE80" />
                         <input type="Text" placeholder='Search your notes.....' className={styles.searchinpt} 
                         value={search}
                         onChange={(e)=>setSearch(e.target.value)}
                        required />
                       </form>

            <div className={styles.subjects}>
             <div className={styles.chapterContainer}>
                {spin==="enable"? <ClipLoader color="#22C55E"size={40}/> : (<>
                 {Notes.length===0? <p className={styles.notFoundmessage}>EMPTY</p> :  Notes.map((e)=>{
                return <div  className={styles.chaptersdiv} key={e._id} onClick={()=>{getChapterDetails(e._id) ,   navigate(`/chapterdetail/${e._id}`);}}>
                 <div className={styles.chapterchild3}><p className={styles.chapterchild3p}> {e.subject}</p></div>
                   <div className={styles.chapterchild1}>
                       <p className={styles.chapterp}>{e.chapter}</p>
                       <ChevronRight strokeWidth={1.75} color="#F5F7F6" />
                   </div>
                   <div className={styles.chapterchild2} >
                    <Trash strokeWidth={2.75}  size={20} color="#22C55E"   onClick={(EVENT) => {EVENT.stopPropagation(); deleteNote(e._id) }}/>
                   </div>
                </div>
              })}
              </>)}
               </div>
            </div>
        </div>
      </div>
        </>
    )
}
export default SubjectDetails


  

      