const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class List extends Model {}

List.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        item: {
            type: DataTypes.STRING,
        },
        childId: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            references: {
                model: 'child',
                key: 'id',
            },
        }
    },
    {
        sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'list',
    }
);

module.exports = List;