const { set } = require('express/lib/response');
const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Information extends Model {}

Information.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        childId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // contact: {
        //     contactName: {
        //         type: DataTypes.STRING,
        //         allowNull: false,
        //     },
        //     contactNumber: {
        //         type: DataTypes.INTEGER,
        //         validate: {
        //             len: [7],
        //             isNumeric: true, 
        //         },
        //     },
            // set(val) {
            //     this.setDataValue("contact", JSON.stringify(val ?? ""));
            // },
        // },
        medical: {
            type: DataTypes.STRING,
        },
        list: {
            type: DataTypes.STRING,
        },
        groupId: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            // references: {
            //     model: '',
            //     key: 'id',
            // },
        },
    },
    {
        sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'information',
    }
);

module.exports = Information;