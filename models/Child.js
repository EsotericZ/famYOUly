const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Child extends Model {}

Child.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
		},
		modalId: {
			type: DataTypes.INTEGER,
			unique: true,
			allowNull: false,
			autoIncrement: true,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		nickname: {
			type: DataTypes.STRING,
		},
		pronouns: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		birthday : {
			type: DataTypes.DATEONLY,
			allowNull: false,
			validate: {
				isDate: true,
			}
		},
        familyName: {
            type: DataTypes.STRING,
			references: {
				model: 'family',
				key: 'familyName',
			}
		},
		picture: {
			type: DataTypes.STRING,
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'child',
	}
);

module.exports = Child;