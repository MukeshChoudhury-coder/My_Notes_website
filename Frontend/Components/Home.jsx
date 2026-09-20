import {useContext} from 'react'
import { proContext } from '../Provider/Provider';
import styles from '../Css_folder/Home.module.css'
import NotesForm from './NotesForm'
import NotesPage from './NotesPage'
import Navbar from './Navbar';
function Home(){
    const {homeNotes }=useContext(proContext)
    return(
        <>
        <div className={styles.homediv}>
            <Navbar />

            <div className={styles.homenotecontainer}>
                {homeNotes==="create"? <NotesForm />: <NotesPage  />}
            </div>
        </div>
        </>
    )
}
export default Home;