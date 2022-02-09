const {
    Information,
    Contact,
    Child,
} = require('../models');

module.exports = {
    createContact: async (req, res) => {
        const {
            firstName,
            lastName,
            number,
            occupation,
        } = req.body;
        try {
            const newContact = await Contact.create({
                firstName,
                lastName,
                number,
                occupation,
            });
            const contactInfo = newContact.get({ plain: true });
            res.render('information', { contactInfo });
        } catch (e) {
            res.json(e);
        }
    }

};