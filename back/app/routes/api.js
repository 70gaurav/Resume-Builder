import express from "express"
import { register, login } from "../controllers/authController.js";
import { saveResume, demo } from "../controllers/resumeController.js";
import verifyToken from "../middlewares/verifyToken.js";
import upload from "../config/multerConfig.js";

const router = express.Router()
//user registeration 
router.post('/register', register)

//user login
router.post('/login', login)

//save resume
router.post('/save', upload.single('resume'), saveResume )

router.get('/demo', verifyToken, demo )
export default router