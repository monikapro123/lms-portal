import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRouter from "./routes/user.route.js";
const app = express();
dotenv.config();
connectDB();
app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/api/v1/user", userRouter); 

app.get("/home",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"i am coming from server"
    })
})

app.listen(3000, () => console.log("server is running"));