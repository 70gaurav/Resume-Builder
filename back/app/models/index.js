import mongoose from "mongoose";
import { MONGO_URI } from "../config/config.js";

const connection = mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


export default  connection