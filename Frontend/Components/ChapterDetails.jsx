import { useContext } from "react";
import { proContext } from "../Provider/Provider";
import styles from "../Css_folder/ChapterDetail.module.css"
import { ClipLoader } from "react-spinners";
function ChapterDetail(){
    const {chapter ,  spin}=useContext(proContext)

    return(
        <>
           <div className={styles.container}>
             {spin==="enable"? <ClipLoader /> : (<>
               <div className={styles.chapterContainer}>
                {chapter.map((e)=>{
                    return <div key={e._id}>
                       <div>
                         <input type="text" value={e.chapter} ></input>
                         <button>edit</button>
                       </div>
                       
                      <div>
                         <textarea type="text" value={e.notes}></textarea>
                         <button>edit</button>
                      </div>
                    </div>
                })}
               </div>
             </>)}

           </div>
        </>
    )
}
export default ChapterDetail