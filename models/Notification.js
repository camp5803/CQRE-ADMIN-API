'use strict';

module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define('Notification', {
        not_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        receiver_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        not_type: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        not_post: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        not_content: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        not_url: {
            type: DataTypes.STRING(1000),
            allowNull: true
        },
        not_datetime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        not_read_datetime: {
            type: DataTypes.DATE,
            allowNull: true
        },
        read_or_not: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'Notification',
        timestamps: false,
        charset: 'utf8mb4',
        collation: 'utf8mb4_general_ci'
    });

    Notification.associate = (db) => {};
    return Notification;
};