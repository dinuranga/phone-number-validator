import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mobileNumberRegex = /^(?:\+94|94)?0(?:70|71|74|75|76|77|78)[0-9]{7}$/;

// Middleware function to validate mobile numbers
function validatemobileNumber(req, res, next) {
    const mobileNumber = req.body.mobileNumber;
    if (!mobileNumber) {
        return res.status(400).json({ error: 'Mobile number is missing in the request body' });
    } else if (!mobileNumberRegex.test(mobileNumber)) {
        return res.status(400).json({ error: 'Invalid mobile number format' });
    }
    next();
}

app.get("/", (req, res) => {
    res.json({ message: "Sri Lanka mobile Number Validator" });
});

// Route to handle mobile number validation
app.post('/validateNumber', validatemobileNumber, (req, res) => {
    res.json({ message: 'Mobile number is valid' });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});