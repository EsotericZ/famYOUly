const {
    Information,
    Contact,
    Child,
} = require('../models');

module.exports = {
    createContact: async (req, res) => {
        const { firstName, lastName, number, relation } = req.body;
        try {
            const newContact = await Contact.create({
                firstName,
                lastName,
                number,
                relation,
            });
            res.json(newContact);
            console.log(newContact);
            // res.render('information', { contactInfo });
        } catch (e) {
            res.json(e);
        }
    },

    getAllContacts: async (req, res) => {
        try {
            const contactData = await Contact.findAll({});
            const contacts = contactData.get({ plain: true });
            res.render('information', {
                contacts,
            });
        } catch (e) {
            res.json(e);
        }
    },
};