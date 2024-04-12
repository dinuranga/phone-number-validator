import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware to parse URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const phoneNumberRegex = /^(?:\+94|94)0(?:70|71|74|75|76|77|78)[0-9]{7}$/;

// Middleware function to validate phone numbers
function validatePhoneNumber(req, res, next) {
    const phoneNumber = req.body.phoneNumber;
    if (!phoneNumber) {
        return res.status(400).json({ error: 'Phone number is missing in the request body' });
    } else if (!phoneNumberRegex.test(phoneNumber)) {
        return res.status(400).json({ error: 'Invalid phone number format' });
    }
    next();
}

app.get("/", (req, res) => {
    res.json({ message: "Sri Lanka Phone Number Validator" });
});

// Route to handle phone number validation
app.post('/validateNumber', validatePhoneNumber, (req, res) => {
    res.json({ message: 'Phone number is valid' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});