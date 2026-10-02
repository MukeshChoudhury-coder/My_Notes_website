import Navbar from "./Navbar"
import styles from "../Css_folder/SubjectDetail.module.css"
import {ArrowLeft , Search} from "lucide-react"
import {useContext} from 'react'
import { proContext } from '../Provider/Provider';
function SubjectDetails(){
    const {Notes}=useContext(proContext)
    return (
        <>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.container2}>
            <div className={styles.gobackicon}>
             <ArrowLeft color="#F5F7F6" />
             <p> Back</p>
           </div>
             <form className={styles.inptsearch}>
                             <Search color="#4ADE80" />
                         <input type="Text" placeholder='Search your notes.....' className={styles.searchinpt}/>
                       </form>
            
            <div className={styles.subjects}>
              {Notes.map((e)=>{
                return <div  className={styles.chapterContainer} key={e._id}>
                       <p>{e.chapter}</p>
                </div>
              })}
            </div>
        </div>
      </div>
        </>
    )
}
export default SubjectDetails