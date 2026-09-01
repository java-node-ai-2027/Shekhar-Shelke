import express from "express"
import mongoose from "mongoose"
import User from "../model/User.mjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const router=express.Router();

// router.get("/", async(req,res)=>{
//     const task=await User.find
// })


router.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body;

    const existingUser=await User.find({email})
    if(!existingUser){
        res.send("User is already exist")
    }
    
     const hashedPassword=await bcrypt.hash(password,10)
     const user = await User.create({
        name,
        email,
        password: hashedPassword,

    });

    res.status(201).json({
        user:{
            id:user.id,
            name:user.name,
            email:user.email,
        }
    })
})

router.post("/login",async(req,res)=>{
const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(user)
    if (!user) {
        return res.json({
            message: "Invalid email or password"
        });
    }

    const passwordMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!passwordMatch) {
        return res.status(401).json({
            message:"Invalid password..."
        });
    }

       const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );
        
        res.send({
            message:"User sucessfully login...",
            token
        })  

})






export default router;

