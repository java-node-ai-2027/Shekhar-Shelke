// import http from "http"
// import express from "express";
// import fs from "fs";
// import studentRoutes from "./routes/student.mjs";
// import  path from "path";
const express = require("express");

const fs = require("fs");

const studentRoutes = require("./routes/student.js");

const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use("/students", studentRoutes);
// const server=http.createServer((req,res)=>{
//     console.log(req.headers.host)
//     console.log(req.url)
//     console.log(req.headers["user-agent"])
//     res.end("Hello, welcome to my page..");

// })

// app.use((req,res,next)=>{
//     console.log("request is recevied..")
//     next();
// })

// app.use((req,res,next)=>{
//     fs.appendFile("log.txt",`${Date.now()} : ${req.method} : ${req.path}\n`,(err, data)=>{
//         next();
//     })
// })

// app.use((req,res,next)=>{
//     console.log("Hello Middleware 1")
//     req.shekhar="Shekhar"
//     next()
// })
// app.use(express.json());
// app.use((req,res,next)=>{
//     console.log("Hello Middleware 2")
//     req.harsh="harsh";
// res.send(req.shekhar+" "+`<h1> ${req.shekhar}</h1>`)
// res.send("hello")
// res.end("hello 2")
// console.log("Hello Middleware 3")

//     next()

// })

// app.get("/students", (req, res) => {
//     res.send("Students");
// });

// const postMiddleWare=(req,res,next)=>{
//     console.log("hey, I am only use for post request")
//     next();
// };

// const postMiddleware = (req, res, next) => {

//     console.log("POST middleware executed");

//     next();
// };

// app.get("/", (req, res) => {
//     res.send("Welcome to the Home.... :)");
//     console.log(req.body);
// });

// app.get("/students", (req, res) => {
//     res.send("Students Page");
// });

// app.get("/students/:id", (req, res) => {
//     // res.send(`"Students Page" : ${req.params.id}`);
//     res.json({message:"hey, my name is shekhar",student:req.body})
// });

// app.post("/students",postMiddleWare, (req, res) => {
//     res.send("Create Student");
// });

// app.put("/students", (req, res) => {
//     res.send("update Student");
// });

// app.delete("/students", (req, res) => {
//     res.send("Delete Student");
// });

// app.get("/getHtmlPage", (req, res) => {
//   res.send(`
//         <html>
//         <head>
//                 <title>Home</title>
//             </head>

//             <body>
//                 <h1 style="color:red;">Welcome to My Website</h1>
//                 <p>This is the home page.</p>
//             </body>
//         </html>
//         `);
// });

// not working
app.get("/getHtmlPage2",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","index.html"))
    // res.sendFile(path.join(__dirname, "view", "index.html"));
})


// app.use((req, res) => {
//   res.status(404).send("Page Not Found");
// });

app.use((req, res) => {

    res.status(404).sendFile(
        path.join(__dirname, "view", "404.html")
    );

});



app.listen(3230, () => {
  console.log("server is running....");
});
