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
		title: {
			type: DataTypes.STRING,
            allowNull: false,
		},
		notes: {
			type: DataTypes.STRING,
		},
		start: {
			type: DataTypes.DATEONLY,
			allowNull: false,
            validate: {
				isDate: true,
			}
		},
		end: {
			type: DataTypes.DATEONLY,
			allowNull: false,
            validate: {
				isDate: true,
			}
		},
		allDay: {
			type: DataTypes.BOOLEAN,
            defaultValue: false,
		},
		startTime: {
			type: DataTypes.STRING,
		},
		endTime: {
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