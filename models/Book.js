'use strict';

module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        book_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        publisher: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        author: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        remain_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'Book',
        timestamps: false,
        charset: 'utf8mb4',
        collation: 'utf8mb4_general_ci'
    });

    Book.associate = (db) => {};
    return Book;
}