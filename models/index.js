const Child = require('./Child');
const Family = require('./Family');
const User = require('./User');
const Information = require('./Information');

Family.hasMany(Child, {
	foreignKey: 'familyName',
	onDelete: 'CASCADE',
});
Child.belongsTo(Family, {
	foreignKey: 'familyName'
});

Family.hasMany(User, {
	foreignKey: 'familyName',
	onDelete: 'CASCADE',
});
User.belongsTo(Family, {
	foreignKey: 'familyName'
});

module.exports = {
    Child,
    Family,
    User,
    Information,
};