const emailRegex = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/;

const emailAddressValidate = (req, res) => {
    const emailAddress = req.body.emailAddress;
    
    if (!emailAddress) {
        return res.status(400).json({ error: 'Please enter an email address' });
    } 
    
    if (!isValidEmailAddress(emailAddress)) {
        return res.status(400).json({ error: 'Invalid email address format' });
    } 
    
    return res.status(200).json({ message: 'Email address format is valid!' });
};

const isValidEmailAddress = (emailAddress) => {
    if (!emailRegex.test(emailAddress)) {
        return false;
    }

    const [localPart, domain] = emailAddress.split('@');

    return isValidEmailPrefix(localPart) && isValidEmailDomain(domain);
};

const isValidEmailPrefix = (localPart) => {
    return !localPart.includes('..') && 
           !localPart.startsWith('.') && 
           !localPart.endsWith('.') &&
           /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*$/.test(localPart);
};

const isValidEmailDomain = (domain) => {
    return !domain.includes('..') && 
           !domain.startsWith('.') && 
           !domain.endsWith('.') &&
           /^[a-zA-Z0-9.-]+$/.test(domain) && 
           domain.split('.').every(part => part.length >= 2);
};

export default emailAddressValidate;
