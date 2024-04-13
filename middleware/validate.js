const mobileNumberRegex = /^(?:\+94|94)?0(?:70|71|74|75|76|77|78)[0-9]{7}$/;

// Middleware function to validate mobile numbers
const validatemobileNumber = (req, res, next) => {
    const mobileNumber = req.body.mobileNumber;
    if (!mobileNumber) {
        return res.status(400).json({ error: 'Mobile number is missing in the request body' });
    } else if (!mobileNumberRegex.test(mobileNumber)) {
        return res.status(400).json({ error: 'Invalid mobile number format' });
    }
    next();
}
export default validatemobileNumber;