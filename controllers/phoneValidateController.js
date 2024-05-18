const phoneNumberRegex = /^(?:\+94|0)(70|71|74|75|76|77|78)[0-9]{7}$/;

const getCarrierInfo = (phoneNumber) => {
    const carriers = {
        '70': 'Mobitel',
        '71': 'Mobitel',
        '72': 'Hutch',
        '74': 'Dialog',
        '75': 'Airtel',
        '76': 'Dialog',
        '77': 'Dialog',
        '78': 'Hutch'
    };
    
    const match = phoneNumber.match(/(?:\+94|0)(70|71|72|74|75|76|77|78)/);
    const prefix = match ? match[1] : null;
    return carriers[prefix];
};

const phoneNumberValidate = (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    if (!phoneNumber) {
        return res.status(400).json({ error: 'Please enter a phone number' });
    } else if (!phoneNumberRegex.test(phoneNumber)) {
        return res.status(400).json({ error: 'Invalid Phone number format' });
    } else {
        const carrierInfo = getCarrierInfo(phoneNumber);
        return res.status(200).json({
            message: 'Phone number format is valid!',
            country: 'Sri Lanka',
            carrier: carrierInfo
        });
    }
};

export default phoneNumberValidate;
