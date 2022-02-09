const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Medical extends Model {}

Medical.init(
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
        // id: {
        //     type: DataTypes.UUID,
        //     defaultValue: UUIDV4,
        // },
        healthInsurance: {
            type: DataTypes.STRING,
        },
        medications: {
            type: DataTypes.STRING,
        },
        allergies: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'medical',
    }
);

module.exports = Medical;