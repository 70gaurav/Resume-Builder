import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';
import User from './models/usersSchema.js';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://Gaurav:resume@cluster0.njuyjsw.mongodb.net/?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// User route to retrieve user information
app.get('/user', (req, res) => {
  const { email } = req.query;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json({ user });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

 
app.use('/api', resumeRoutes);
