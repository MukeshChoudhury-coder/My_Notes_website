import styles from '../Css_folder/Login.module.css';
import { Mail , LockKeyhole,LogIn } from "lucide-react"
import { proContext } from '../Provider/Provider';
import { useContext } from 'react';
import { ClipLoader } from "react-spinners";
function Login(){
const { setSigninLogin , userLogin , setUserLogin ,login , spin,message } = useContext(proContext);
    return(
        <>
        <div className={styles.loginForm}>
            <div className={styles.welcome}>
                <p className={styles.welcomemsg}>Welcome Back</p>
                <p className={styles.welcometagline}>Login to continue your account.</p>
            </div>
                
                 <div className={styles.message}>
                                    <p className={styles.messagep} >{message}</p>
                                  </div>
            <div className={styles.formdiv}>
                <form  onSubmit={(e)=>{
                    e.preventDefault()
                    login()
                 
                }}>
                  <label>
                    <p className={styles.lablePara}>Email</p>
                    <div className={styles.lableDiv}>
                        <Mail color="#4ADE80"  />
                        <input type="email" placeholder='Enter your email'  className={styles.lableInput} 
                        value={userLogin.email}  
                        onChange={(e)=> setUserLogin({...userLogin , email:e.target.value})}
                        required/>
                    </div>
                  </label>


                  <label>
                    <p className={styles.lablePara}>Password</p>
                    <div className={styles.lableDiv}>
                        <LockKeyhole color="#4ADE80" />
                        <input type="password" placeholder='Enter your password' className={styles.lableInput}
                        value={userLogin.password}
                        onChange={(e)=>setUserLogin({...userLogin  , password:e.target.value})}
                        required/>
                    </div>
                  </label>
                   <p className={styles.lableForget}>Forget Password?</p>
                <button className={styles.lableLogButton}>
                   {spin==="enable"?  <ClipLoader color="black" size={20} />  : (<><LogIn />  <p>Login</p></>)}
                </button>
                </form>
            </div>

                     <p className={styles.or}>OR</p>
             <button className={styles.googleAccBtn}>
                    <img src="../public/google_logo.png" width={"50px"} />
                    <p>Continue with Google</p>
                </button>

                
                    <p className={styles.dontHaveanaccount}>Don`t have an account?   <button className={styles.signBtn}  onClick={()=>setSigninLogin("signup")}>Sign Up</button></p>
             
        </div>
        </>
    )
}
export default Login