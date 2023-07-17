import mongoose from 'mongoose';

const { Schema } = mongoose;

const resumeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Resume = mongoose.model('Resume', resumeSchema);

export default Resume;
