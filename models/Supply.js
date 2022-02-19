'use strict';

module.exports = (sequelize, DataTypes) => {
    const Supply = sequelize.define('Supply', {
        supply_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        amount: {
            type: DataTypes.TINYINT,
            allowNull: false,
        }
    }, {
        tableName: 'Supply',
        timestamps: false,
        charset: 'utf8mb4',
        collation: 'utf8mb4_general_ci'
    });

    Supply.associate = (db) => {};
    return Supply;
}