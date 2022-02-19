'use strict';

module.exports = (sequelize, DataTypes) => {
    const Scrap = sequelize.define('Scrap', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        post_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        }
    }, {
        tableName: 'Scrap',
        timestamps: false,
        charset: 'utf8mb4',
        collation: 'utf8mb4_general_ci'
    });

    Scrap.associate = (db) => {};
    return Scrap;
}