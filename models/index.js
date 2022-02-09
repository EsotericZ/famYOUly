const Child = require('./Child');
const Family = require('./Family');
const User = require('./User');
const Information = require('./Information');
const Todo  = require('./Todo');

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

Todo.belongsTo(User, {
	foreignKey: 'familyName'
});

User.hasMany(Todo, {
	foreignKey: 'familyName',
	onDelete: 'CASCADE',
});

module.exports = {
    Child,
    Family,
    User,
    Information,
	Todo,
};