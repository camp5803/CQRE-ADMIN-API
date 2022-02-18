'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(88),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        user_type: {
            type: DataTypes.STRING(10),
            allowNull: true,
            defaultValue: 'Guest'
        },
        profile: {
            type: DataTypes.STRING(1000),
            allowNull: false
        }
    }, {
        tableName: 'User',
        timestamps: false,
        charset: 'utf8mb4',
        collation: 'utf8mb4_general_ci'
    });

    User.associate = (db) => {};
    return User;
};