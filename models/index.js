const Child = require('./Child');
const Family = require('./Family');
const User = require('./User');
// const Information = require('./Information');
const Medical = require('./Medical');
const Contact = require('./Contact');
const List = require('./List');
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

Child.hasMany(Contact, {
	foreignKey: 'childId',
	onDelete: 'CASCADE',
});
Contact.belongsTo(Child, {
	foreignKey: 'childId',
});

Child.hasMany(Medical, {
	foreignKey: 'childId',
	onDelete: 'CASCADE',
});
Medical.belongsTo(Child, {
	foreignKey: 'childId',
});

Child.hasMany(List, {
	foreignKey: 'childId',
	onDelete: 'CASCADE',
});
List.belongsTo(Child, {
	foreignKey: 'childId',
});

User.hasMany(Todo, {
	foreignKey: 'userId',
	onDelete: 'CASCADE',
});
Todo.belongsTo(User, {
	foreignKey: 'userId',
});

Family.hasMany(Todo, {
	foreignKey: 'familyName',
	onDelete: 'CASCADE',
});
Todo.belongsTo(Family, {
	foreignKey: 'familyName',
});

module.exports = {
    Child,
    Family,
    User,
	Medical,
	Contact,
	List,
	Todo,
};