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
const [messagePopup , setMessagePopup]=useState("")
//------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------//
//-----------MANU BAR HIDE-UNHIDE BUTTON FUNCTIONALITY---//
const [manubar ,  setManuBra]=useState("hidden")
//---------XXXXXXXXXXXXXX-------------------------//
    //---------- USENAVIGAET VARIABLE----------//
    const navigate=useNavigate()
    const backNavigation=()=>{
       navigate('/home')
    }
    const backToSubject=()=>{
        navigate('/subjectdetail')
    }
    useCallback(()=>{
       backNavigation()
    },[])
    //------ EventListener on SIGNUP-LOGIN buttons-----//
    const [signinLogin, setSigninLogin]=useState("disable")
    //-------------------------------------------------//

    //----------------CREATE ACCOUNT -----------------//
    const [ createAccount, setCreateAccount]=useState({ name:"", email:"",password:""})
    async function createUserAccount(){
         setSpin("enable")
        try{
            const res= await fetch(`${import.meta.env.VITE_API_URL}/user/signup`,{
                method:"POST",
                credentials: "include",
                headers:{"Content-Type" : "application/json" },
                body: JSON.stringify(createAccount)
            })


           const data= await res.json()
           
        
           if(res.ok){
           await getHomePage();
           await getSubjectName()
             navigate("/home");
           setSpin("disable")
           setMessagePopup("true")
           }
           
           if(res.status===409){
              setMessage(data.message)
              setSpin("disable")
              setMessagePopup("true")
           }
           
           if(res.status>=500){
             setMessage(data.message)
            setSpin("disable")
            setMessagePopup("true")
           }
            
        }catch(err){
          console.log(err)
        }finally{
            setSpin("disable") 
        }
         setTimeout(()=>{
           setMessagePopup("false")
         },3000)
    }
   
//----------------------- XXXXXXXXX-----------------//
//------------- API CALL FOR HOME PAGE-------------//
  const [userData , setUserData]=useState({})
async function getHomePage(){
    try{
        const res= await fetch(`${import.meta.env.VITE_API_URL}/user/home`,{
            method:"GET",
            credentials:"include",
        })

        if(res.ok){
            const data= await res.json()
            setUserData(data)
            setCreateAccount(data.message)
        }
    }catch(err){
        console.log(err)
    }
}

//--  dont forgot to use useeffect here--//
useEffect(()=>{
getHomePage()
},[])

//------
//---------------LOGIN LOGIC---------------//
const [userLogin , setUserLogin]=useState({email:"" , password:""})

const login= async()=>{
setSpin("enable")
    try{
         
        const res= await fetch(`${import.meta.env.VITE_API_URL}/user/login`,{
            method:"POST",
            credentials:"include",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(userLogin)
        })

         const data= await res.json()
          
        if(res.ok){
             await getHomePage();
             await getSubjectName()
               navigate("/home");
             setSpin("disable")
           
        }else if ( res.status===400){
            setMessage(data.message)
              setSpin("disable") 
            
        }
        if (res.status >= 501) {
                   setMessage("Server error. Please try again later.");
                  
          }
           
    }catch(err){
        console.log(err)
          setMessage(
            "Unable to connect. Please check your connection and try again."
        );
    }finally{
        setSpin("disable") 
    }
    
}
//----------XXXXXXXXX--------------------//

//-------------- NOTES LOGIN STARTS HERE-------//
      //---------1. ADD NOTES LOGIC----------//
    
      const [userNote ,  setUserNote]=useState({ subject:"" ,  chapter:"" , notes:""})

      const notesData= async()=>{
    
        try{
            const res= await fetch(`${import.meta.env.VITE_API_URL}/user/notes`,{
                method:"POST",
                credentials:"include",
                headers:{"Content-Type" : "application/json"},
                body:JSON.stringify(userNote)
            })

            if(res.ok){
                const data= await res.json()
                setMessage(data.message)
               
            }
            if (res.status >= 500) {
                  setMessage(data.message)
                 
                   }
      

        }catch(err){
            console.log(err)
        }

      }

      //---------GETNOTE FROM BACKEND---------------------//
      const [subjectName , setSubjectName]=useState([])
      const [subMessage ,  setSubMessage]=useState()
      const  getSubjectName= async()=>{
        try{
            const res= await fetch(`${import.meta.env.VITE_API_URL}/user/getnote`,{
                method:"GET",
                credentials:'include'
            })

              const data= await res.json()
            if(res.ok){

                setSubjectName( data);
              if(data.length===0){
              setSubMessage("Please create your notes!") 
              }
            }
            if(res.status===400){
                setSubMessage(data.message)
            }
            if(res.status>=500){
                setSubMessage(data.message)
            }

        }catch(err){
            console.log(err)
        }
      }
 
    useEffect(()=>{
        getSubjectName()
     },[subjectName]) 
   

    //-----------GET SUBJECTS DETAIL -------------//
    const [Notes, setGetNote] = useState(() => {
  const savedNotes = localStorage.getItem("subjectName");

  return savedNotes ? JSON.parse(savedNotes) : [];
});
    const getSubjectDeatils=useCallback(async (val)=>{
          setSpin("enable")
         
      try{
        const res = await fetch(`${import.meta.env.VITE_API_URL}/user/subDeatial/?sub=${val}`,{method:"GET" , credentials:'include'})

        if(res.ok){
            const data= await res.json()
            setGetNote(data)
              localStorage.setItem("subjectName", JSON.stringify(data));
            
            navigate("/subjectdetail")
              setSpin("disable")
        }
        if(res.ok!==200){
             setSpin("disable")
        }

       
      }catch(err){
        console.log(err)
      }
    },[Notes])

    //----------- CHAPTER DETAIL------------//
    const [chapter , setChapter]=useState({chapter: "", notes: ""})
    const getChapterDetails = async (Id) => {
       setSpin("enable");

      try {
        const res = await fetch(
      `${import.meta.env.VITE_API_URL}/user/chapter/?ID=${Id}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch chapter");
    }

         setChapter(data);
    
   
  } catch (err) {
    console.log(err);
  } finally {
    setSpin("disable");
  }
};

     //------------UPDATE NOTES-----------------//
     const updateNote=async()=>{
        try{
             const res= await fetch(`${import.meta.env.VITE_API_URL}/user/update`,{
                method:"PUT",
                headers:{"Content-Type": "application/json"},
                credentials:'include',
                body:JSON.stringify(chapter)
             })
               const data= await res.json()
             if(res.ok){
                setMessage(data.message)
                setMessagePopup("true")
             }
             if(res.status>=500){
                setMessage(data.message)
              
             }
        }catch(err){
            console.log(err)
        }

     
     }

     useCallback(()=>{
        updateNote()
     },[])
     //-------------LOGOUT USER LOGIC------------//
     const logOutUser=useCallback(async()=>{
               setSpin("enable")
               try{
                 const res= await fetch(`${import.meta.env.VITE_API_URL}/user/logout`,{
                    method:"POST",
                    credentials:"include"
                 })  
    
                  
                   
                   if(res.ok){
                    
                        const data= await res.json()
                  console.log(data.message)
                    setSpin("disable")
                        navigate("/")
                   }
                    
                    if(res.status!==201){
                        setSpin("disable")
                    }
               }catch(err){
                console.log("error")
               }
     },[])

     //-------------DELETE NOTE LOGIC-------------//
     const deleteNote= useCallback(async(id)=>{
        try{
            const res= await fetch(`${import.meta.env.VITE_API_URL}/user/delete/?noteId=${id}`, {
                method:"DELETE",
                credentials:"include"
            })
 const data= await res.json()
            if( res.ok){
               
                setMessage(data.message)
                 // popup setting//
             
                   

              //---- deleting subject from the ui---//
    
            
            // UI se note remove //
            const deletedNotes= Notes.filter((e)=>{
                return e._id!==id
            })


            localStorage.setItem("subjectName", JSON.stringify(deletedNotes))
            setGetNote((oldNotes) =>
                oldNotes.filter((note) => note._id !== id)
            );
             
      
            if(res.status>=500){
                setMessage(data.message)
                 // popup setting//
             
            }

            
            }
        }catch(err){
            console.log(err)
        }
        
     },[])
     //-----SEARCH LOGIC---------//
     const [search ,  setSearch]=useState()
     const getSearch=async()=>{
      setSpin("enable")
          Notes, setGetNote
      try{
         const res= await fetch(`${import.meta.env.VITE_API_URL}/user/search/?data=${search}`,{
          method:"GET",
          credentials:'include'
         })

          const data= await res.json()
         if(res.ok){
            setSpin("disable")
       setGetNote(data)
         }
         if(res.status===409){
           setSpin("disable")
           setMessage(data.message)
         }
         if(res.status>=500){
             setSpin("disable")
           setMessage(data.message)
         }

      }catch(err){
        console.log(err)
      }
     }

    return(
        <>
        <proContext.Provider value={{
            //----------navigate page-------//
            backNavigation,navigate, backToSubject ,
            //--------buttons functionality----------//
            manubar ,  setManuBra,spin,
            //----- all the  signup variebles and functions---------------// 
            setSigninLogin, signinLogin ,setCreateAccount , createAccount , createUserAccount,userData,message,
            messagePopup,
     //----- all the  Login variebles and functions---------------//
      userLogin , setUserLogin,login , homeNotes, setHomeNotes,
      //--------------CREATE NOTES LOGIN STARTS HERE-------//
      //-------update note variable----/
      updateNote,
      //---------1. ADD NOTES LOGIC----------//
      userNote ,  setUserNote , notesData ,subjectName,subMessage,
      //-----------get seubect detail---------//
      getSubjectDeatils,Notes,
      //----------logout variables----------//
      logOutUser,
      //-----------delete note variable--------//
      deleteNote,
      //--------chapter detail --------//
      getChapterDetails,chapter,setChapter,
      //---search variable---//
       getSearch,setSearch, search
        }}>
            {children}
        </proContext.Provider>
        </>
    )
}


export default Provider