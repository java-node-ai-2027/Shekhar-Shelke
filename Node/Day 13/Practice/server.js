const http=require("http")
console.log("Hello world....")

const server=http.createServer((req,res)=>{
    console.log(req.url)
    console.log(req.headers.host)
    console.log(req.headers["user-agent"])
    res.end("Hello, Welcome to new page...")
})

server.listen(3800,()=>{
    console.log("Server is running....")
})