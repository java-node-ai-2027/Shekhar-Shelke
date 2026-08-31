import express from "express"
import UserRouter from "./routes/user.mjs"

const app=express();

app.use(express.json())
app.use("/users",UserRouter)


app.listen(3600,()=>{
    console.log("server starting... ")
})