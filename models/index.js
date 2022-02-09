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

Contact.belongsTo(Child, {
	foreignKey: 'childId',
});
Medical.belongsTo(Child, {
	foreignKey: 'childId',
});
List.belongsTo(Child, {
	foreignKey: 'childId',
});
Child.hasMany(Contact, {
	foreignKey: 'childId',
	onDelete: 'CASCADE',
});

Child.hasMany(Medical, {
	foreignKey: 'childId',
	onDelete: 'CASCADE',
});

Child.hasMany(List, {
	foreignKey: 'childId',
	onDelete: 'CASCADE',
});

// Information.hasMany(Child, {
// 	foreignKey: 'childId',
// });


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
    // Information,
	Medical,
	Contact,
	List,
	Todo,
};