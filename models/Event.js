const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Event extends Model {}

Event.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
		},
		start: {
			type: DataTypes.DATE,
			allowNull: false,
            validate: {
				isDate: true,
			}
		},
		end: {
			type: DataTypes.DATE,
			allowNull: false,
            validate: {
				isDate: true,
			}
		},
		title: {
			type: DataTypes.STRING,
            allowNull: false,
		},
		notes: {
			type: DataTypes.STRING,
		},
		location: {
			type: DataTypes.STRING,
		},
		eventType: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		approval: {
			type: DataTypes.BOOLEAN,
            defaultValue: false,
		},
        familyName: {
            type: DataTypes.STRING,
			references: {
				model: 'family',
				key: 'familyName',
			}
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'event',
	}
);

module.exports = Event;