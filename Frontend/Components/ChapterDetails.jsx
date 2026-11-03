import { useContext , useState } from "react";
import { proContext} from "../Provider/Provider";
import {SavePlus, ArrowLeft,Summary} from "lucide-react"
import styles from "../Css_folder/ChapterDetail.module.css"
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Message from "../Components/Message"

function ChapterDetail(){
    const {chapter ,setChapter ,  spin ,  getChapterDetails,updateNote , backToSubject , getAiSummary, aiMessage , loader}=useContext(proContext)
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
           <div className={styles.newcontainer}>
             <div className={styles.backArrow}>
          <ArrowLeft strokeWidth={1.75}  onClick={backToSubject}/>
        </div>

        <Message />
             {spin==="enable"? <ClipLoader /> : (<>
               <div className={styles.chapterContainer}>
              
                      <div >
                         <form className={styles.chapterForm}>
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
                            <button className={styles.updatebtn} disabled={!on}  style={{ backgroundColor: on? "#4ADE80" : "#A7B3AD", borderColor: on? "#4ADE80" : "#A7B3AD"}} 
                            onClick={(e)=>{
                              e.preventDefault()
                              setOn(false)
                               updateNote()
                            }}
                            
                            >
                              <SavePlus strokeWidth={1.75} />
                              <p>Update</p>
                            </button>

                            <button className={styles.Summarybtn} 
                            disabled={chapter.buttonDisable}
                            onClick={(e)=>{
                              e.preventDefault()
                               getAiSummary(chapter._id)
                            }}

                            style={{ backgroundColor: chapter.buttonDisable? "#A7B3AD" : "#4ADE80", borderColor: chapter.buttonDisable? "#A7B3AD" : "#4ADE80" ,  color: chapter.buttonDisable?  "#F5F7F6" :  "#0B0F0D"}}
                            > 
                             <Summary strokeWidth={1.75} />
                             {chapter.buttonDisable===true ? "Summary Generated" : "AI Summary"}
                             
                            </button>
                          </div>
                        
                         </form>
                         <div className={styles.aisummarycontainer} >
                        <p className={styles.aisummarycontainerp1}
                        style={{ backgroundColor: aiMessage===""? "#22C55E" : "#ff6b6b7a" , color: aiMessage===""? "#0B0F0D" :" rgb(255, 45, 45)"}}
                        >
                          {aiMessage===""? "AI Summary" : aiMessage}
                        </p>

                        <p className={styles.aisummarycontainerp2}>{loader=== true? "Summrizing......." : chapter. aiSummary}</p>
                       
                         </div>
                    </div>
               </div>
             </>)}

           </div>
        </>
    )
}
export default ChapterDetail