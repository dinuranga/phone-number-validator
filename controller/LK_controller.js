const messege =  (req,res) => {
    res.json({message:"Sri Lanka Mobile Number Validator"})
}
const validateMobileNumber = (req, res) => {
    res.json({ message: 'Mobile number is valid' });
}

export {messege, validateMobileNumber};