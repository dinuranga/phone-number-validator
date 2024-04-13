import express from 'express';
import validate from "../middleware/validate.js"
import {messege, validateMobileNumber} from '../controller/LK_controller.js'

const router = express.Router();

router.get("/", messege);
router.post('/validate',validate, validateMobileNumber)

export default router;