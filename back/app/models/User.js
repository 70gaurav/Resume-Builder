import { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName:{
        type:String,
        required: true 
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    resume:{
        type:String,
        required: false
    },
    createDate:{
        type:Date,
        default:Date.now
    },
    updateDate:{
        type:Date,
        default:Date.now
    }
})

const User = model("User", userSchema)
export default User