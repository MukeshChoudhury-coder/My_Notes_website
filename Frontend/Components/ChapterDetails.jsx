import { useContext , useState } from "react";
import { proContext } from "../Provider/Provider";
import {SavePlus, ArrowLeft,Summary} from "lucide-react"
import styles from "../Css_folder/ChapterDetail.module.css"
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function ChapterDetail(){
    const {chapter ,setChapter ,  spin ,  getChapterDetails,updateNote , backToSubject,message,  messagePopup}=useContext(proContext)
////------- SETTING CONDITION ON UPDATE BUTTON-------------//
const [on ,  setOn ]=useState(false)
//--------------------------------------------------------//
const { id } = useParams();


 useEffect(() => {
  if (id) {
    getChapterDetails(id);
  }
}, [id])

    return(
        <>
           <div className={styles.popupmessage}>
                       <p className={styles.popupmessagep}
                        style={{
                          display: messagePopup==="true" ?  "block": "none",
                        }}
                       >{message}</p>
                      </div>

           <div className={styles.newcontainer}>
             <div className={styles.backArrow}>
          <ArrowLeft strokeWidth={1.75}  onClick={backToSubject}/>
        </div>
             {spin==="enable"? <ClipLoader /> : (<>
               <div className={styles.chapterContainer}>
              
                      <div >
                         <form className={styles.chapterForm} onSubmit={(e)=>{
                          e.preventDefault(),
                          updateNote()
                          setOn(false)
                         }}>
                          <label className={styles.chapterlabel}>
                            <p>Chpater</p>
                              <input type="text" 
                              value={chapter.chapter}
                              onChange={(e)=>{setChapter(prev=>({...prev, chapter: e.target.value})),  setOn(true)}} 
                              ></input>
                          </label>

                          <label className={styles.noteslabel}>
                            <p>Notes</p>
                            <textarea type="text" value={chapter.notes}  
                             onChange={(e)=>{setChapter(prev=>({...prev, notes: e.target.value})),setOn(true)}}
                            ></textarea>
                          </label>
                          <div className={styles.buttonContainer} >
                            <button className={styles.updatebtn} disabled={!on}  style={{ backgroundColor: on? "#4ADE80" : "#A7B3AD", borderColor: on? "#4ADE80" : "#A7B3AD"}} >
                              <SavePlus strokeWidth={1.75} />
                              <p>Update</p>
                            </button>

                            <button className={styles.Summarybtn}> 
                             <Summary strokeWidth={1.75} />
                              <p>Sumarized your notes</p>
                            </button>
                          </div>
                         </form>
                    </div>
               </div>
             </>)}

           </div>
        </>
    )
}
export default ChapterDetail