import { UserPlus , Mail , LockKeyhole,LogIn } from "lucide-react"
import styles from '../Css_folder/Login.module.css';
import { proContext } from '../Provider/Provider';
import { useContext } from 'react';
import { ClipLoader } from "react-spinners";

function SignUp(){
    const { setSigninLogin, setCreateAccount , createAccount ,  createUserAccount , message ,spin} = useContext(proContext);
     return(
        <>
        <div className={styles.loginForm}>. 
            <div className={styles.welcome}>
                <p className={styles.welcomemsg}>Create Account</p>
                <p className={styles.welcometagline}>Join MyNotes & start taking Notes.</p>
            </div>
                  <div className={styles.message}>
                    <p className={styles.messagep} >{message}</p>
                  </div>
            <div className={styles.formdiv}>
                <form onSubmit={(e)=>{
                   e.preventDefault()
                    createUserAccount()
                }}>
                  <label>
                    <p className={styles.lablePara}>Full name</p>
                    <div className={styles.lableDiv}>
                        <Mail color="#4ADE80"  />
                        <input type="text" placeholder='Enter your full name'  className={styles.lableInput}      value={createAccount?.name}
                        onChange={(e)=>setCreateAccount({...createAccount, name:e.target.value})}
                        required/>
                    </div>
                  </label>


                  <label>
                    <p className={styles.lablePara}>Email</p>
                    <div className={styles.lableDiv}>
                        <Mail color="#4ADE80"  />
                        <input type="email" placeholder='Enter your email'  className={styles.lableInput}
                        value={createAccount?.email}
                        onChange={(e)=>setCreateAccount({...createAccount, email:e.target.value})}
                        required/>
                    </div>
                  </label>


                  <label>
                    <p className={styles.lablePara}>Password</p>
                    <div className={styles.lableDiv}>
                        <LockKeyhole color="#4ADE80" />
                        <input type="password" placeholder='Enter your password' className={styles.lableInput} 
                        value={createAccount?.password}
                        onChange={(e)=>setCreateAccount({...createAccount, password:e.target.value})}
                        required/>
                    </div>
                  </label>


                   <p className={styles.lableForget}>Forget Password?</p>
                <button className={styles.lableLogButton}>
                  {spin==="enable"?<ClipLoader color="black" size={20} /> : (<><UserPlus /> <p>Create A ccount</p></>)}
                </button>
                </form>
            </div>

                     <p className={styles.or}>OR</p>
             <button className={styles.googleAccBtn}>
                    <img src="../public/google_logo.png" width={"50px"} />
                    <p>Continue with Google</p>
                </button>

                
                    <p className={styles.dontHaveanaccount}>Already have an account?   <button className={styles.signBtn}  onClick={()=>setSigninLogin("login")}>Login</button></p>
             
        </div>
        </>
    )
}

export default SignUp