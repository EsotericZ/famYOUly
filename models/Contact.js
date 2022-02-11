const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Contact extends Model {}

Contact.init(
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
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [10],
            },
        },
        relation: {
            type: DataTypes.STRING,
        },
        childId: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            references: {
                model: 'child',
                key: 'id',
            },
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
		modelName: 'information',
    }
);

module.exports = Contact;