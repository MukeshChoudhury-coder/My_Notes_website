import {useContext} from 'react'
import { proContext } from '../Provider/Provider';
import styles from '../Css_folder/NotesPage.module.css'
import {Search , Funnel, ChevronDown , ArrowDownAZ , Pen , Trash} from 'lucide-react'
function NotesPage(){
    const {getNote , userData , deleteId}=useContext(proContext)
        return(
        <>
        <div className={styles.container} >
            <div className={styles.greeting}>
                <p className={styles.greetingp}>Hello, <span className={styles.greetingspan}>{userData.name}</span></p>
                <p className={styles.greetingp2}>Here are your notes. Keep going</p>
            </div>
            
            <div className={styles.searchfiltersection}>
                <div className={styles.inptsearch}>
                        <Search color="#4ADE80" />
                        <input type="Text" placeholder='Search by Subject.....' className={styles.searchinpt} 
                       />
                    </div>

                    <div className={styles.filter}>
                        <Funnel strokeWidth={1.20} size={20} color={'#F5F7F6'} />
                        <p style={{color:"#F5F7F6", fontFamily:"sans-serif" , fontSize:"15px"}} >Filter</p>
                        <ChevronDown strokeWidth={1.25} color={'#F5F7F6'}  size={25} />
                    </div>
                    <div className={styles.sort}>
                        <ArrowDownAZ strokeWidth={1} size={20} color={'#F5F7F6'} />
                        <p style={{color:"#F5F7F6", fontFamily:"sans-serif" , fontSize:"15px"}} >Sort</p>
                        <ChevronDown strokeWidth={1.25} color={'#F5F7F6'}  size={25} />
                    </div>
            </div>

            <div className={styles.userNotes}>
                <div className={styles.notescount}>
                        <p className={styles.notescountp}> Total Notes </p>
                        <p>0</p>
                </div>

                <div className={styles.notescontainer}>
                    {getNote.map((e)=>{
                        return <div className={styles.notes} key={e._id}>
                            <p className={styles.title}>{e.subject}</p>
                          
                        </div>
                    })}
                </div>
            </div>

          
        </div>
        </>
        
    )
}

export default NotesPage