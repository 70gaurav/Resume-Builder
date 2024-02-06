import User from "../models/User.js";
import bcrypt from "bcrypt"
export const register = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).send({ error: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: "Internal Server Error" });
  }
};
