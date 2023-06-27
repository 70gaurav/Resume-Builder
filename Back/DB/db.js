import mongoose from "mongoose";

const connection = mongoose.connect("mongodb+srv://gaurav:resume@cluster0.zbkbait.mongodb.net/?retryWrites=true&w=majority" , {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

export default connection;   