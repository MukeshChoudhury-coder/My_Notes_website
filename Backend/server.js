import express  from "express"
import   dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import  connectDB from "./Database/db.js"
import userSignUp from "./controller/Signup.js"
import midd from "./AuthMiddleware/middleware.js"
import homePage from "./controller/getHome.js"
import login from "./controller/login.js"
import addNote from "./controller/addNote.js"
import sendSubjectName from"./controller/sendSubjectName.js"
import sendChapter from"./controller/sendChapterDetail.js"
import logOut from "./controller/logOut.js"
import sendSubDetails from "./controller/sendSubjectDetail.js"
import deleteNote from "./controller/deleteNote.js"
import updateNote from"./controller/updateNote.js"
import sendSearch from"./controller/SearchData.js"
//-------------------------------------------//

 dotenv.config()
const app=express()

app.use(cors({
    origin:(process.env.Frontend_Port),
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
     credentials: true   
}))
app.use(express.json())
app.use(cookieParser());
 connectDB()
//----------------ROUTES-----------------//
app.post("/user/signup",userSignUp)
app.post("/user/login",login )
app.get("/user/home", midd,homePage )
app.post("/user/notes", midd, addNote )
app.get("/user/getnote", midd, sendSubjectName)
app.get("/user/subDeatial", midd, sendSubDetails)
app.get("/user/chapter", midd,sendChapter)
app.post("/user/logout", logOut)
app.delete("/user/delete",midd, deleteNote)
app.put("/user/update",midd, updateNote)
app.get("/user/search",midd, sendSearch)

//---------------------------------------//


const PORT = process.env.PORT || 3001;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server live on port ${PORT}`);
});