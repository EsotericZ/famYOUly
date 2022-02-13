const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Medical extends Model {}

Medical.init(
    {
        childId: {
            type: DataTypes.UUID,
            references: {
                model: 'child',
                key: 'id',
            },
        },
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        medications: {
            type: DataTypes.STRING,
        },
        allergies: {
            type: DataTypes.STRING,
        },
        healthInsurance: {
            type: DataTypes.STRING,
        },
        // familyName: {
        //     type: DataTypes.STRING,
        //     references: {
        //         model: 'family',
        //         key: 'familyName',
        //     },
        // },
    },
    {
        sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'medical',
    }
);

module.exports = Medical;