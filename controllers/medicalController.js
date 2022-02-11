// const {
//     Medical,
//     Child,
// } = require('../models');

// module.exports = {
//     addMedicalInfo: async (req, res) => {
//         const {
//             healthInsurance,
//             medications,
//             allergies,
//         } = req.body;
//         try {
//             const newMedicalInfo = await Medical.create({
//                 healthInsurance,
//                 medications,
//                 allergies,
//             });
//             const medicalData = newMedicalInfo.get({ plain: true });
//             res.json('/medical', {
//                 medicalData,
//             });
//         } catch (e) {
//             res.json(e);
//         }
//     },
//     // getMedicalInfoByChildId: async (req, res) => {
//     //     const {  }
//     //     try {
            
//     //     } catch (e) {
//     //         res.json(e);
//     //     }
//     // }

// };