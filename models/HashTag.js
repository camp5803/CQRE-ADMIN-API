'use strict';

module.exports = (sequelize, DataTypes) => {
    const HashTag = sequelize.define('HashTag', {
        hashtag_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName: 'HashTag',
        timestamps: false,
        charset: 'utf8mb4',
        collation: 'utf8mb4_general_ci'
    });

    HashTag.associate = (db) => {};
    return HashTag;
}