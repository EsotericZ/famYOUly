const {
	Contact,
    Medical,
    List,
    Child,
} = require('../models');

module.exports = {
    addMedicalInfo: async (req, res) => {
        const { medications, allergies, healthInsurance, childId } = req.body;
        try {
            const newMedicalInfo = await Medical.create({
                medications,
                allergies,
                healthInsurance,
                childId,
            });
            res.redirect(request.get('referer'));
        } catch (e) {
            res.json(e);
        }
    },

    updateMedicalInfo: async (req, res) => {
        const { medications, allergies, healthInsurance, id } = req.body;
        try {
            const medicalData = await Medical.update({
                medications,
                allergies,
                healthInsurance
            },
            {
                where: {
                    id
                }
            });
            res.redirect(request.get('referer'));
        } catch (e) {
            res.json(e);
        }
    },

    createContact: async (req, res) => {
        const { firstName, lastName, number, relation, childId } = req.body;
        try {
            const newContact = await Contact.create({
                firstName,
                lastName,
                number,
                relation,
                childId
            });
            res.redirect(request.get('referer'));
            // res.json(newContact);
        } catch (e) {
            res.json(e);
        }
    },

    updateContact: async (req, res) => {
        const { firstName, lastName, number, relation, id } = req.body;
        const childId = req.params.childId;
        try {
            const contactInfo = await Contact.update({
                firstName, 
                lastName,
                number,
                relation
            },
            {
                where: {
                    id
                }
            });
            res.redirect(request.get('referer'));
        } catch (e) {
            res.json(e);
        }
    },

    deleteContact: async (req, res) => {
        const { id } = req.body;
        try {
            await Contact.destroy({
                where: {
                    id
                }
            });
            res.redirect(request.get('referer'));
        } catch (e) {
            res.json(e);
        }
    },

    createList: async (req, res) => {
        const { item, childId } = req.body;
        try {
            const newList = await List.create({
                item,
                childId,
            });
            res.redirect(request.get('referer'));
        } catch (e) {
            res.json(e);
        }
    },

    // deleteList: async (req, res) => {
    //     const { id } = req.body;
    //     try {
    //         const deleteList = await List.destroy({
    //             where: {
    //                 id
    //             }
    //         });
    //         res.json(deleteList);
    //     } catch (e) {
    //         res.json(e);
    //     }
    // },

    setChild: async (req, res) => {
        const { childId } = req.body;
        req.session.childId = childId;
    },

    getInformation: async (req, res) => {
        if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		if (req.session.user.approval == 0) {
			return res.redirect('/waitingapproval');
		}
        const childId = req.params.childId;
        try {
            const allMedical = await Medical.findAll({
                where: {
                    childId
                },
            });
            const allContacts = await Contact.findAll({
                where: {
                    childId
                },
            });
            const allLists = await List.findAll({
                where: {
                    childId
                },
            });
            const childData = await Child.findByPk(childId);
            res.render('information', {
                medical: allMedical.map(med => med.get({ plain: true })),
                contact: allContacts.map(cont => cont.get({ plain: true })),
                list: allLists.map(li => li.get({ plain: true })),
                childId: childData.get({ plain: true }),
                user: req.session.user,
            });
        } catch (e) {
            res.json(e);
        }
    },
};