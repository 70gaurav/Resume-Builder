
import Resume from '../models/resumeSchema.js';

export const createResume = async (req, res) => {
  // Extract resume data from the request body
  const { name, about, skills, experience, education, achievements } = req.body;

  try {
    // Create a new resume
    const newResume = new Resume({
      name,
      about,
      skills,
      experience,
      education,
      achievements,
      user: req.user._id, // Assuming you have attached the authenticated user to the request using the authMiddleware
    });

    // Save the resume to the database
    await newResume.save();

    res.status(201).json({ message: 'Resume created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateResume = async (req, res) => {
  const { id } = req.params;
  const { name, about, skills, experience, education, achievements } = req.body;

  try {
    // Find the resume by ID
    const resume = await Resume.findById(id);
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    // Update the resume data
    resume.name = name;
    resume.about = about;
    resume.skills = skills;
    resume.experience = experience;
    resume.education = education;
    resume.achievements = achievements;

    // Save the updated resume to the database
    await resume.save();

    res.json({ message: 'Resume updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteResume = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the resume by ID
    const resume = await Resume.findById(id);
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    // Delete the resume
    await resume.remove();

    res.json({ message: 'Resume deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getResume = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the resume by ID
    const resume = await Resume.findById(id);
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    res.json(resume);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllResumes = async (req, res) => {
  try {
    // Find all resumes
    const resumes = await Resume.find();

    res.json(resumes);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
