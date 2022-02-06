const Family = require('./Family');
const User = require('./User');
const Information = require('./Information');

Family.hasMany(User, {
	foreignKey: 'familyName',
	onDelete: 'CASCADE',
});

User.belongsTo(Family, {
	foreignKey: 'familyName'
});

module.exports = {
    Family,
    User,
    Information,
};