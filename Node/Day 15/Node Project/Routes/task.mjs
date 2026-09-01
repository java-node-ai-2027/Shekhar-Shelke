import express, { json } from "express";
import mongoose from "mongoose";
import Task from "../model/TaskDetails.mjs";

import middleware from "../Middleware/auth.mjs";
import task from "../model/TaskDetails.mjs";

const router = express.Router();
const Enum={
  CREATE:'create',
  INPROGRESS:'inprogress',
  DONE:'done',
  REJECT:'reject' 
}
router.post("/create", middleware, async (req, res) => {
  const { title, description } = req.body;
  console.log(title, description);
  if (!title) {
    res.send({
      message: "Title is required",
    });
  }

  try {
    const user = await Task.create({
      Title: title,
      Description: description,
      user: req.user.id,
    });
    res.status(201).json({
      user,
    });
  } catch (error) {
    res.send({
      errorr: error.message,
      message: "errro",
    });
  }
});

router.delete('/delete', middleware, async (req, res) => {
  console.log("heyy")
  const task_id = req.query.ids;
  const task = await Task.findByIdAndDelete({ _id:task_id })
  if(task){
    res.status(200).json({
      message : "task successfully deleted..",
      task
    })
  }else{
    res.json({
      message : "record is not found"
    })
  }

});

router.get("/",middleware,async(req,res)=>{
  const tasks=await Task.find({user: req.user.id})
  console.log(tasks)
  if(task.length>0){
     res.status(200).json({
    task:tasks
  })
  }else{
    res.status(400).json({
      message:"no task here"
    })
  }

 
})

router.patch('/update/',middleware,async(req,res)=>{
  const id=req.query.id;
  const taskupdate=await Task.findByIdAndUpdate(id,req.body,{new:true})
  res.status(200).json({
    taskupdate
  })
})

router.patch('/update-stage/',middleware,async(req,res)=>{
  const id=req.query.id;
  const stage=req.query.stage;
  const checkEnum = Object.values(Enum).includes(stage);
    if (!checkEnum) {
      return res.json({ message: "Invalid status value provided." });
    }

  const taskupdate=await Task.findByIdAndUpdate(
    id ,
    {$set:{stage:stage}},{new :true}
  )
  res.status(200).json({
    taskupdate
  })
})
export default router;
