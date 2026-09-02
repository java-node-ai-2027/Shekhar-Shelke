import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connection is succefully")
}).catch((error)=>{
    console.log("something went wrong ",error)
})

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
    res.send("Refresh Token API is running");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});