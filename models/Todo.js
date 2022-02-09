const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');
class Todo extends Model {}
Todo.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
		},
		task: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		completed: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		userId: {
			type: DataTypes.UUID,
			references: {
				model: 'user',
				key: 'id',
			}
		},
		familyName: {
			type: DataTypes.STRING,
			references: {
				model: 'family',
				key: 'familyName',
			}
		}
	},
	{
		sequelize,
		timestamps: true,
		freezeTableName: true,
		modelName: 'todo'
	}
);
module.exports = Todo;