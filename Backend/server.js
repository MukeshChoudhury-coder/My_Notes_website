const express= require ("express")
const   dotenv = require ("dotenv")
const cors=require("cors")
const cookieParser = require("cookie-parser");
const  connectDB= require("./Database/db")
const userSignUp=require("./controller/Signup")
const midd=require("./AuthMiddleware/middleware")
const homePage=require("./controller/getHome")
const login=require("./controller/login")
const addNote= require("./controller/addNote")
const sendNote= require("./controller/sendNote")
const logOut= require("./controller/logOut")
//-------------------------------------------//

 dotenv.config()
const app=express()
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin:(process.env.Frontent_Port),
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
     credentials: true   
}))
 connectDB()
//----------------ROUTES-----------------//
app.post("/user/signup",userSignUp)
app.post("/user/login",login )
app.get("/user/home", midd,homePage )
app.post("/user/notes", midd, addNote )
app.get("/user/getnote", midd, sendNote)
app.post("/user/logout", logOut)

//---------------------------------------//


app.listen(3001,()=>{
    console.log("server live at http://localhost:3001")
})