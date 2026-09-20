import styles from '../Css_folder/Navbar.module.css'
import {CircleUserRound , Plus , Bookmark , X, Menu ,UserRoundPen ,ChevronRight ,Settings ,Moon , CircleQuestionMark , MessageSquare , LogOut} from "lucide-react"
import { useContext} from "react";
import { proContext } from "../Provider/Provider";
import { Link } from 'react-router-dom';
function Navbar(){
    const {userData , homeNotes, setHomeNotes ,manubar ,  setManuBra}=useContext(proContext)



    return(
        <>
        <div className={styles.navbar}>
         <div className={styles.navbarcontainer}>

         <div className={styles.menucontainer}>
            <div className={styles.menu} onClick={()=>setManuBra("display")}>
            <Menu size={20} strokeWidth={3} color='#22C55E'  />
          </div>

          <div className={styles.menubox} style={manubar==="display"? {transformOrigin:"Left" , transform:"scaleX(1)"}:  {transformOrigin:"Left" , transform:"scaleX(-1)"}}>

            <div className={styles.canclebtn}>
             <div className={styles.logoDiv2}>
             <img src="../public/My_Note_Logo.png" width={"60px"} alt="Logo" className={styles.logo2} />
             <p className={styles.my2}>My <span className={styles.Notes2}>Notes</span></p>
           </div>
           <X size={18} strokeWidth={4}  color='white' className={styles.cancel} onClick={()=>setManuBra("hide")}/>
            </div>


<div className={styles.homeandnotesContainer} >
             <div className={styles.homeBtn} onClick={()=>setHomeNotes("create")}  
             style={{borderLeft: homeNotes==="create"? "4px solid #22C55E" : "transparent" }} >
                <Plus size={20} strokeWidth={2.60}
                style={{color: homeNotes==="create"? "#7CFF9B" : "#F5F7F6"}}
                />
                <p style={{color: homeNotes==="create"? " #7CFF9B" : "#F5F7F6"}}>Create</p>
             </div>

             <div className={styles.notesBtn} onClick={()=>setHomeNotes("notes")}
               style={{borderLeft: homeNotes==="notes"? "4px solid #22C55E" : "transparent"}}
             >
                <Bookmark strokeWidth={1.25} style={{color: homeNotes==="notes"? "#7CFF9B" : "#F5F7F6"}} />
                <p style={{color: homeNotes==="notes"? "#7CFF9B" : "#F5F7F6"}} > Notes</p>
             </div>
              </div>

       <div className={styles.settingsection} >
         <p className={styles.settings}>Setting</p>

         <button className={styles.profile}>
            <UserRoundPen size={16} strokeWidth={1.75} />
            <p>Profile</p>
            <ChevronRight size={16} strokeWidth={1.75} />
         </button>

         <button className={styles.profile}>
           <Settings size={16} strokeWidth={1.75} />
            <p>Preferences</p>
            <ChevronRight size={16} strokeWidth={1.75} />
         </button>

         <button className={styles.profile}>
           <Moon size={16} strokeWidth={1.75} />
            <p>Appearance</p>
            <ChevronRight size={16} strokeWidth={1.75} />
         </button>
       </div>
      

        <div className={styles.supportsection} >
         <p className={styles.support}>Support</p>

         <button className={styles.help}>
           <CircleQuestionMark size={16} strokeWidth={1.75} />
            <p>Help & Support</p>
            <ChevronRight size={16} strokeWidth={1.75} />
         </button>

         <button className={styles.feedback}>
         <MessageSquare size={16} strokeWidth={1.75} />
            <p>Feedback</p>
            <ChevronRight size={16} strokeWidth={1.75} />
         </button>
       </div>

       <div className={styles.logout}>

      <button className={styles.logoutbtn}>
           <p>LogOut ?</p>
         <LogOut size={16} strokeWidth={1.75} color='#FF6B6B'/>
      </button>
       </div>
          </div>
         </div>



              <div className={styles.logoDiv}>
             <img src="../public/My_Note_Logo.png" width={"60px"} alt="Logo" className={styles.logo} />
             <p className={styles.my}>My <span className={styles.Notes}>Notes</span></p>
           </div>
        

            <div className={styles.userInfo}>
             
               <CircleUserRound color="#22C55E" size={30} strokeWidth={2} />
               <p className={styles.userName}>{userData.name ? userData.name[0] : ""}</p>
            </div>
         </div>
        </div>
        </>
    )
}
export default Navbar;