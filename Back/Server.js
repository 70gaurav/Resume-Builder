import  Express  from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import  Jwt  from "jsonwebtoken";


const app = Express()
app.use(Express.json())

app.listen(3000,() => {
    console.log("server started on port 3000")
})