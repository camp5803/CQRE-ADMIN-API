'use strict';

module.exports = (sequelize, DataTypes) => {
    const Delinquent = sequelize.define('Delinquent', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        expiry_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'Delinquent',
        timestamps: false,
        charset: 'utf8mb4',
        collation: 'utf8mb4_general_ci'
    });

    Delinquent.associate = (db) => {};
    return Delinquent;
}