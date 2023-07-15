
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken";
import User from "../models/usersSchema.js"

exports.signup = (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      newUser.save((err, user) => {
        if (err) {
          res.status(400).json({ error: 'Failed to create user' });
        } else {
          res.status(201).json({ message: 'User created successfully' });
        }
      });
    }
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
    } else {
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          res.status(500).json({ error: 'Internal Server Error' });
        } else if (!isMatch) {
          res.status(401).json({ error: 'Invalid credentials' });
        } else {
          const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });
          res.json({ token });
        }
      });
    }
  });
};

