// const express = require("express");
// const path = require("path");
import path from "path"
import express from "express"
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// app.get("/", (req, res) => {

//     res.sendFile(path.join(__dirname, "view", "index.html"));

// });

const sendPage=(page,res)=>{
    res.sendFile(path.join(__dirname, "view", `${page}.html`));
}

app.get("/", (req, res) => {
    sendPage("index", res);    
});
app.listen(3000);