const {
	Contact,
    Medical,
    List,
    Child,
} = require('../models');

module.exports = {
    addMedicalInfo: async (req, res) => {
        const {
            healthInsurance,
            medications,
            allergies,
        } = req.body;
        try {
            const newMedicalInfo = await Medical.create({
                healthInsurance,
                medications,
                allergies,
            });
            // const medicalData = newMedicalInfo.get({ plain: true });
            // res.json('/medical', {
            //     medicalData,
            // });
        } catch (e) {
            res.json(e);
        }
    },

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

    createList: async (req, res) => {
        const {
            item,
        } = req.body;
        try {
            const newList = await List.create({
                item,
            });
            res.json(newList);
        } catch (e) {
            res.json(e);
        }
    },

    getInformation: async (req, res) => {
        // if (!req.session.loggedIn) {
		// 	return res.redirect('/login');
		// }
		// if (req.session.user.approval == 0) {
		// 	return res.redirect('/waitingapproval');
		// }
        const { childId } = req.body;
        try {
            const allMedical = await Medical.findAll({
                // where: {
                //     childId
                // },
            });
            const allContacts = await Contact.findAll({
                // where: {
                //     childId
                // },
            });
            const allLists = await List.findAll({
                // where: {
                //     childId
                // },
            });
            res.render('information', {
                medical: allMedical.map(med => med.get({ plain: true })),
                contact: allContacts.map(cont => cont.get({ plain: true })),
                list: allLists.map(li => li.get({ plain: true })),
            });

        } catch (e) {
            res.json(e);
        }
    },
// };
//     createInformation: async (req, res) => {
//         const {
// 			childId,
// 			contact,
// 			medical,
// 			list,
// 			// groupId,
// 		} = req.body;
// 		try {
// 			const informationData = await Information.create({
// 				childId,
// 				contact,
// 				medical,
// 				list,
// 				// groupId,
// 			});
// 			const information = informationData.get({plain: true});
// 			res.render('information', { information });
// 		} catch (e) {
// 			res.json(e);
// 		}
// 	},


	renderInformation: (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			res.render('information', {
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	}
};