import express from "express"
import User from "../models/user.mjs"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/auth.mjs"
const router=express.Router();

router.get("/signup",async(req,res)=>{
    const {name,email,password}=req.body

    if(!name ||!email||!password){
        return res.status(400).json({
            message:"name,email and password dis required.."
        })
    }
    
    const existingUser=await User.findOne({email})
    if(existingUser){
        res.json({
            message:"User is already exist"
        })
    }


    const hashedPassword=await bcrypt.hash(password,10)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role: req.body.role || "user"
    });

    res.status(201).json({
        user:{
            id:user.id,
            name:user.name,
            email:user.email
        }
    })

})

router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }

    const passwordMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!passwordMatch) {
        return res.status(401).json({
            message: "Invalid email or password"
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

    res.cookie("token",token)

    res.json({
        message: "Login successful"
    });
});

router.get("/profile", authMiddleware, async (req, res) => {

    const user = await User.findById(req.user.id)
        .select("-password");

    res.json({
        user
    });
});

router.get("/admin", authMiddleware, (req, res) => {
    console.log(req.user.role)
    if (req.user.role !== "admin") {
        return res.status(403).json({
            message: "Access denied"
        });
    }

    res.json({
        message: "Welcome Admin"
    });
});

export default router;