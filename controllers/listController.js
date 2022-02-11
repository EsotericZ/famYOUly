// const {
//     List,
//     Child,
// } = require('../models');

// module.exports = {
//     createList: async (req, res) => {
//         const {
//             item,
//         } = req.body;
//         try {
//             const newList = await List.create({
//                 item,
//             });
//             res.json(newList);
//         } catch (e) {
//             res.json(e);
//         }
//     },
// };