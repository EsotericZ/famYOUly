// // const { set } = require('express/lib/response');
// const { Model, DataTypes, UUIDV4 } = require('sequelize');
// const sequelize = require('../config');

// class Information extends Model {}

// Information.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//         },
//         childId: {
//             type: DataTypes.UUID,
//             defaultValue: UUIDV4,
//             references: {
//                 model: 'child',
//                 key: 'id',
//             },
//         },
//         contact: {
//             type: DataTypes.UUID,
//             defaultValue: UUIDV4,
//             references: {
//                 model: 'contact',
//                 key: 'id',
//             },
//         },
//         // set(val) {
//         //         this.setDataValue("contact", JSON.stringify(val ?? ""));
//         //     },
//         // },
//         medical: {
//             type: DataTypes.STRING,
//             references: {
//                 model: 'medical',
//                 key: 'childId'
//             },
//         },
//         list: {
//             type: DataTypes.STRING,
//             references: {
//                 model: 'list',
//                 key: 'childId'
//             },
//         },
//         // groupId: {
//         //     type: DataTypes.UUID,
//         //     defaultValue: UUIDV4,
//             // references: {
//             //     model: '',
//             //     key: 'id',
//             // },
//     },
//     {
//         sequelize,
// 		timestamps: false,
// 		freezeTableName: true,
// 		modelName: 'information',
//     }
// );


// module.exports = Information;