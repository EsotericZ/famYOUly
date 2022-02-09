const {
    List,
    Information,
} = require('../models');

module.exports = {
    createList: async (req, res) => {
        const {
            items,
        } = req.body;
        try {
            const newList = await List.create({
                items,
            });
            res.json(newList);
        } catch (e) {
            res.json(e);
        }
    }
};