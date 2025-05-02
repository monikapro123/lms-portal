import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type:String,
        enum:["instructor","student"],
        default:"student"
    },
    enrolledCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }],
    photoURL: {
        type: String,
        default: "",
    },
    
    
},{timestamps:
    true},);

export default mongoose.model("user", UserSchema);