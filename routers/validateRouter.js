import express from 'express'
import phoneNumberValidate from '../controllers/phoneValidateController.js'
import emailAddressValidate from '../controllers/emailAddressValidate.js'
const router = express.Router();

router.post("/phone", phoneNumberValidate);
router.post("/email", emailAddressValidate);

export default router;