import styles from '../Css_folder/Registration.module.css';
import Login from './Login';
import SignUp from './SignUp';
import { useContext } from 'react';
import {proContext} from '../Provider/Provider';
function Registration(){
  const{signinLogin}=useContext(proContext)
    return(
        <>
        <div className={styles.parent}>
          <div className={styles.logoNotesText}>
            <div className={styles.logoNotes}>
                <img src="../public/My_Note_Logo.png" alt="logo" className={styles.logo} width="150" height="130"/>
                <p className={styles.my}>My <span className={styles.Notes}>Notes</span></p>
            </div>
          </div>

          <div>
          {signinLogin==="login" ? <Login /> : <SignUp />   }
          </div>
        </div>
        </>
    )
}
export default Registration;