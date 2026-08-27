const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/myDatabase")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    skill: String
});

const Student = mongoose.model("Student", studentSchema);

app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/students", async (req, res) => {
    try {
        const student = await Student.create({
            name: "Shekhar",
            age: 22,
            skill: "Node.js"
        });

        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});