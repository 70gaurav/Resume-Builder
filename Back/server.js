import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import resumeRoutes from './routes/resumeRoutes';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'YOUR_MONGODB_URI';

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
