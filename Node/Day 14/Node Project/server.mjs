import express from "express"
const app=express();

app.use(express.json())
app.use((res,req,next)=>{
    console.log("Middleware 1 ")
    next();
})
app.get("/",(req,res)=>{
    setTimeout(() => {
       res.send("Hello world.......")
  }, 1000);
})
app.use((res,req,next)=>{
    console.log("Middleware 2 ")
    next();
})



app.post("/student",(req,res)=>{
    console.log(req.headers["user-agent"])
    res.send({
        Student:req.body
    },res.status(201))
})


app.listen(3200,()=>{
    console.log("server starting...")
})