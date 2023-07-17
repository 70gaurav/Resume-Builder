import express from 'express';
import { createResume, updateResume, deleteResume, getResume, getAllResumes } from '../controllers/resumeController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/resume', authMiddleware, createResume);
router.put('/resume/:id', authMiddleware, updateResume);
router.delete('/resume/:id', authMiddleware, deleteResume);
router.get('/resume/:id', authMiddleware, getResume);
router.get('/resumes', authMiddleware, getAllResumes);

export default router;
