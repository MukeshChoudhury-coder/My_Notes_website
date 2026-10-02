import {useContext} from 'react'
import { proContext } from '../Provider/Provider';
import styles from '../Css_folder/NotesPage.module.css'
import {Search , Funnel, ChevronDown , ArrowDownAZ ,MoveRight} from 'lucide-react'
function NotesPage(){
    const {subjectName , userData , getSubjectDeatils}=useContext(proContext)
        return(
        <>
        <div className={styles.container} >
            <div className={styles.greeting}>
                <p className={styles.greetingp}>Hello, <span className={styles.greetingspan}>{userData.name}</span></p>
                <p className={styles.greetingp2}>Here are your notes. Keep going</p>
            </div>

            <div className={styles.userNotes}>
                <div className={styles.notescount}>
                        <p className={styles.notescountp}> Total Notes </p>
                        <p>0</p>
                </div>

                <div className={styles.notescontainer}>
                    {subjectName.map((e,index)=>{
                        return <div className={styles.notes} key={index} onClick={()=>getSubjectDeatils(e.subject)}>
                            <p className={styles.title}>{e.subject}</p>
                            <MoveRight color="#F5F7F6" />
                        </div>
                    })}
                </div>
            </div>

          
        </div>
        </>
        
    )
}

export default NotesPage