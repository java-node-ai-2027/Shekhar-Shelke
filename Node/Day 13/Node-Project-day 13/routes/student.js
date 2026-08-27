// import express from 'express'
const express = require("express");

const router=express.Router();

router.get("/", (req, res) => {
    res.send("All Students");
});
//path filtering below exmaple 
router.get("/:id", (req, res) => {
    res.send(`Student ID: ${req.params.id}`);
});

router.post("/", (req, res) => {
    res.send("Create Student");
});


// export default router;

module.exports=router;