const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class User extends Model {}

User.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [6]
			}
		},
		role : {
			type: DataTypes.STRING,
			allowNull: false,
		},
		familyName: {
			type: DataTypes.STRING,
			references: {
				model: 'family',
				key: 'familyName',
			}
		},
		approval: {
			type: DataTypes.BOOLEAN,
		},
		level: {
			type: DataTypes.INTEGER,
		},
		visible: {
			type: DataTypes.STRING,
		},
		phoneNumber: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		picture: {
			type: DataTypes.STRING,
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'user',
	}
);

module.exports = User;