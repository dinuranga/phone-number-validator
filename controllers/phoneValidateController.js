const phoneNumberRegex = /^(?:\+94|0)(70|71|74|75|76|77|78)[0-9]{7}$/;

const getCarrierInfo = (phoneNumber) => {
    const carriers = {
        '70': { name: 'Mobitel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/SLTMobitel_Logo.svg/2560px-SLTMobitel_Logo.svg.png' },
        '71': { name: 'Mobitel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/SLTMobitel_Logo.svg/2560px-SLTMobitel_Logo.svg.png' },
        '72': { name: 'Hutch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hutch_logo.svg/1200px-Hutch_logo.svg.png' },
        '74': { name: 'Dialog', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dialog_Axiata_logo.svg/1200px-Dialog_Axiata_logo.svg.png' },
        '75': { name: 'Airtel', logo: 'https://www.airtel.lk/wp-content/uploads/2021/07/2020-may-1.jpg' },
        '76': { name: 'Dialog', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dialog_Axiata_logo.svg/1200px-Dialog_Axiata_logo.svg.png' },
        '77': { name: 'Dialog', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dialog_Axiata_logo.svg/1200px-Dialog_Axiata_logo.svg.png' },
        '78': { name: 'Hutch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hutch_logo.svg/1200px-Hutch_logo.svg.png' }
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
        if (carrierInfo) {
            return res.status(200).json({
                message: 'Phone number format is valid!',
                country: 'Sri Lanka',
                carrier: {
                    name: carrierInfo.name,
                    logo: carrierInfo.logo
                }
            });
        } else {
            return res.status(400).json({ error: 'Unable to determine carrier' });
        }
    }
};

export default phoneNumberValidate;
