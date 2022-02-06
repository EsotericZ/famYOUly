const Family = require('./Family');
const User = require('./User');

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
};