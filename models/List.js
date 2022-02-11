const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class List extends Model {}

List.init(
    {
        childId: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            references: {
                model: 'child',
                key: 'id',
            },
        },
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
        },
        item: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'list',
    }
);

module.exports = List;