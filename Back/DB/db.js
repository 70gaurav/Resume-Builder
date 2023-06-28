
import mongoose from "mongoose";

const connection = mongoose.connect("mongodb+srv://gaurav:resume@cluster0.83hhms8.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

export default connection;
