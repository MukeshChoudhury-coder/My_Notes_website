import { useNavigate } from "react-router-dom";
import  { createContext, useState , useCallback }  from "react";
import { useEffect } from "react";


 export const proContext= createContext()

function Provider({children}){
    //------------BUTTONS FUNCTIONALITY---------//
    //--------------- HOME AND NOTES BUTTON-----//
const [homeNotes, setHomeNotes]=useState("create")
//-----------------LOADING SPINNER LOGIC BTN------//
const [spin , setSpin]=useState("")
//------------MESSAGE----------------------------//
const [message, setMessage]=useState("")
//------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------//
//-----------MANU BAR HIDE-UNHIDE BUTTON FUNCTIONALITY---//
const [manubar ,  setManuBra]=useState("hidden")
//---------XXXXXXXXXXXXXX-------------------------//
    //---------- USENAVIGAET VARIABLE----------//
    const navigate=useNavigate()
    //------ EventListener on SIGNUP-LOGIN buttons-----//
    const [signinLogin, setSigninLogin]=useState("disable")
    //-------------------------------------------------//

    //----------------CREATE ACCOUNT -----------------//
    const [ createAccount, setCreateAccount]=useState({ name:"", email:"",password:""})
     const [userData , setUserData]=useState({})
    async function createUserAccount(){
         setSpin("enable")
        try{
            const res= await fetch(`http://localhost:3001/user/signup`,{
                method:"POST",
                credentials: "include",
                headers:{"Content-Type" : "application/json" },
                body: JSON.stringify(createAccount)
            })


           const data= await res.json()
            setMessage(data.message)
        
           if(res.ok){
           await getHomePage();
           await getNotes();
           setSpin("disable")
           }else if(!res.ok){
            if (res.status === 501) {
                   navigate("/wentwrong");
                   }
           }
           
           if(res.status!==201){
            setSpin("disable")
           }
            
        }catch(err){
          console.log(err)
        }
         setTimeout(()=>{
            setMessage("")
         },1000)
    }

//----------------------- XXXXXXXXX-----------------//
//------------- API CALL FOR HOME PAGE-------------//

async function getHomePage(){
    try{
        const res= await fetch(`http://localhost:3001/user/home`,{
            method:"GET",
            credentials:"include",
        })

        if(res.ok){
            const data= await res.json()
            setUserData(data)
            setCreateAccount(data.message)
         
              navigate("/home")
        }else if(!res.ok){
            if (res.status === 501) {
                   navigate("/wentwrong");
                   }
           }
    }catch(err){
        console.log(err.message)
    }
}

//--  dont forgot to use useeffect here--//
useEffect(()=>{
getHomePage()
},[])

//---------------LOGIN LOGIC---------------//
const [userLogin , setUserLogin]=useState({email:"" , password:""})

const login= async()=>{
setSpin("enable")
    try{
         
        const res= await fetch(`http://localhost:3001/user/login`,{
            method:"POST",
            credentials:"include",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(userLogin)
        })

         const data= await res.json()
            setMessage(data.message)
        if(res.ok){
             await getHomePage();
             await getNotes()
             setSpin("disable")
        }else if(!res.ok){
            if (res.status === 501) {
                   navigate("/wentwrong");
                   }
           }

        if(res.status!==201){
           setSpin("disable") 
        }
    }catch(err){
        console.log(err)
    }
     setTimeout(()=>{
            setMessage("")
         },1000)
}
//----------------XXXXXXXXX--------------------//

//-------------- NOTES LOGIN STARTS HERE-------//
      //---------1. ADD NOTES LOGIC----------//
    
      const [userNote ,  setUserNote]=useState({ title: "" , notes: ""})

      const notesData= async()=>{
    
        try{
            const res= await fetch(`http://localhost:3001/user/notes`,{
                method:"POST",
                credentials:"include",
                headers:{"Content-Type" : "application/json"},
                body:JSON.stringify(userNote)
            })

            if(res.ok){
                const data= await res.json()
                console.log(res.status)
            }else if(!res.ok){
            if (res.status === 501) {
                   navigate("/wentwrong");
                   }
           }

        }catch(err){
            console.log(err)
        }
      }

      //---------GETNOTE FROM BACKEND---------------------//
      const [getNote , setGetNote]=useState([])

      const  getNotes= useCallback(async()=>{
        try{
            const res= await fetch("http://localhost:3001/user/getnote",{
                method:"GET",
                credentials:'include'
            })

            if(res.ok){
                const data= await res.json()
                setGetNote(data)
                console.log(getNote)
            }

        }catch(err){
            console.log(err)
        }
      },[])
 
    useEffect(()=>{
        getNotes()
     },[getNotes]) 

    //-----------DELETE NOTES LOGIC-------------//
     const deleteId=useCallback(async(id)=>{
        console.log(id)
        try{
           const res= await fetch(`http://localhost:3001/user/notedelete/?id=${id}`,{
            method:"DELETE",
            credentials:"include"
           })

           if(res.ok){
            const data= await res.json()
            console.log(data.message)
           }else if(!res.ok){
            if (res.status === 501) {
                   navigate("/wentwrong");
                   }
           }
        }catch{
            console.log(err)
        }
     },[])
    return(
        <>
        <proContext.Provider value={{
            //--------buttons functionality----------//
            manubar ,  setManuBra,spin,
            //----- all the  signup variebles and functions---------------// 
            setSigninLogin, signinLogin ,setCreateAccount , createAccount , createUserAccount,userData,message,
     //----- all the  Login variebles and functions---------------//
      userLogin , setUserLogin,login , homeNotes, setHomeNotes,
      //--------------CREATE NOTES LOGIN STARTS HERE-------//
      //---------1. ADD NOTES LOGIC----------//
      userNote ,  setUserNote , notesData ,getNote,
      //-----------Delete varieble---------//
      deleteId
        }}>
            {children}
        </proContext.Provider>
        </>
    )
}


export default Provider