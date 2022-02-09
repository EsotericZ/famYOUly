const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Family extends Model {}

Family.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
		},
		familyName: {
			type: DataTypes.STRING,
            unique: true,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'family',
	}
);

module.exports = Family;