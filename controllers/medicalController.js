const {
    Medical,
    Information,
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
            const medicalData = newMedicalInfo.get({ plain: true });
            res.json(medicalData);
        } catch (e) {
            res.json(e);
        }
    },
};