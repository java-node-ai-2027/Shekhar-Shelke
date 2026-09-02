import express from "express"
const router=express.Router()

let users=[
    {id:1,name:"Shekhar"},
    {id:2,name:"Aditya"},
    {id:3,name:"Mahesh"}
]

router.get("/",(req,res)=>{
    res.json(users)
});
router.get("/:id",(req,res)=>{
        const user=users.find((user)=>{
            return user.id===Number(req.params.id)
        })

        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }
        res.json(user)
});

router.post("/",(req,res)=>{
    const newUser={
        id:users.length+1,
        name:req.body.name
    }

    users.push(newUser)
    res.status(201).json(newUser)
})

router.put("/:id",(req,res)=>{

    const user =users.find((user)=>{return user.id===Number(req.params.id)});
    console.log(user)
    if(!user){
        return res.status(404).json({
            message:"User Not Found"
        })
    }

    user.name=req.body.name;

    res.status(200).json(user)
})

router.delete("/:id", (req, res) => {
    users = users.filter(u => u.id !== Number(req.params.id));

    res.json({ message: "User deleted successfully" });
});

export default router;  