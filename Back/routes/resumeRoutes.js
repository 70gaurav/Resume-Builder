const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/resume', authMiddleware, resumeController.createResume);
router.put('/resume/:id', authMiddleware, resumeController.updateResume);
router.delete('/resume/:id', authMiddleware, resumeController.deleteResume);
router.get('/resume/:id', authMiddleware, resumeController.getResume);
router.get('/resumes', authMiddleware, resumeController.getAllResumes);

module.exports = router;
