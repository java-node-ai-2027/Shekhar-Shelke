import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import UserRouter from "./Routes/user.mjs"
import Usertask from "./Routes/task.mjs"

dotenv.config();
const app=express();


app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connection is succefully")
}).catch((error)=>{
    console.log("something went wrong ",error)
})

app.use("/users",UserRouter);
app.use("/tasks",Usertask);

app.get("/",(req,res)=>{
    res.send("Welcome to Our Home Page")
})


const port=process.env.PORT||3100;


app.listen(port,()=>{
   console.log( `server is starting on ${port}`)
});
