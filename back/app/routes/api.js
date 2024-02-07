import express from "express"
import { register, login } from "../controllers/authController.js";
import { saveResume } from "../controllers/resumeController.js";
import upload from "../config/multerConfig.js";

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/save', upload.single('resume'), saveResume )


export default router