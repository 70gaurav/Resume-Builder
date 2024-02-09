import { SECRET_KEY } from "../config/config.js";
import jwt  from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
    const token = req.header("Authorization")

    if(!token){
        return res.status(401).send({message:"Access Denied. Token is missing"})
    }

    try{
        const decoded = jwt.verify(token, SECRET_KEY)
        next()
    }
    catch(error){
        return res.status(403).send({message: "Access denied. Invalid Token"})
    }
}

export default verifyToken