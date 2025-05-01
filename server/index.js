import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
const app = express();
dotenv.config();
connectDB();
app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(3000, () => console.log("server is running"));