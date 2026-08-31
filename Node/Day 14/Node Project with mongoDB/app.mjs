import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.mjs";
// import os from "os"
//import cookieParse from "cookie-parser"
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";

// console.log(os.cpus().length)

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),

    cookie: {
      maxAge: 60 * 60 * 1000,
    },
  }),
);

app.use("/api/auth", authRoutes);

app.get("/login", (req, res) => {
  res.sendFile("login.html", {
    root: "./views",
  });
});

app.get("/session-test", (req, res) => {

    req.session.username = "Shekhar";

    res.json({
        message: "Session created",
        username: req.session.username
    });

});
app.get("/session-user", (req, res) => {

    res.json({
        username: req.session.username
    });

});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
