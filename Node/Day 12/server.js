
// const http=require('http');
import http from "http"
// const math=require('./math')
console.log("Hello world....!")
console.log(math.add(30,10))
console.log(math.sub(30,10))
const server =http.createServer((req,res)=>{
    console.log(req.url)
    console.log(req.headers)
    res.statusCode=200;
    res.end("Hello from node.js ")

     if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");

    res.end(`
        <h1>Welcome</h1>
        <p>This page is coming from Node.js</p>
    `);

    }
    else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
    console.log(req.headers.host)
    console.log(req.headers['user-agent'])
    res.setHeader("Content-Type","application/json")

    const student={
        name:"Shekhar",
        age:22,
    }
   
    res.end(JSON.stringify(student))
    res.end(student)

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("X-App-Name", "My Node App");

    res.end("Request received successfully");
})


// Routing Requests
const server5=http.createServer((req,res)=>{

    if(req.method==="GET" && req.url==="/"){
        res.end("Home page")
    }else if(req.method==="GET" && req.url==="/about"){
        res.end("About page")
    }else if(req.method==="GET" && req.url==="/contact"){
        res.end("contact page")
    }else if(req.method==="GET" && req.url==="/product"){
        res.end("Product page")
    }else{
        res.statusCode=404;
        res.end("Page Not Found")
    }
})


// accessing query paramater using URL  
const server2=http.createServer((req,res)=>{

    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(req.headers.host)
    console.log(url.pathname);

    const id = url.searchParams.get("id");
    console.log(url)
    console.log(id);

    res.end("Done");
});

// Redirecting Requests

const server3=http.createServer((req,res)=>{

    if(req.method==="GET" && req.url==="/old-page"){

        res.statusCode=301;
        res.setHeader("Location","/new-page")
        res.end();
    }else if(req.url==="/new-page"){
        res.end("Welcome to new Page")
    }else{
        res.statusCode=404;
        res.end("Page Not Found")
    }
})

//Parsing Request Bodies

const server4=http.createServer((req,res)=>{
    let body="";
    req.on("data",(chunk)=>{
        body+=chunk;
        console.log(chunk)
    })
    req.on("end",()=>{
        console.log(body)
        let data=JSON.parse(body)
        console.log(data.name)
        console.log(data.age)
        res.setHeader("Content-Type","text/plain")
        res.end(JSON.stringify({

            message:"Student created",
            student:data
        }))
    });
   
});


server.listen(3000,()=>{
    console.log("Server running on port 3000")
})