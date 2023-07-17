import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://gaurav:resume@cluster0.83hhms8.mongodb.net/?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

app.use('/auth', authRoutes);
app.use('/api', resumeRoutes);
