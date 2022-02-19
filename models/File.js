'use strict';

module.exports = (sequelize, DataTypes) => {
    const File = sequelize.define('File', {
        file_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        originalname: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        filename: {
            type: DataTypes.STRING(88),
            allowNull: true
        },
        filepath: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        filetype: {
            type: DataTypes.STRING(45),
            allowNull: true
        }
    }, {
        tableName: 'File',
        timestamps: false,
        charset: 'utf8mb4',
        collation: 'utf8mb4_general_ci'
    });

    File.associate = (db) => {};
    return File;
}