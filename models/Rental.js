'use strict';

module.exports = (sequelize, DataTypes) => {
    const Rental = sequelize.define('Rental', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        book_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        borrow_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true
        },
        return_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'Rental',
        timestamps: false,
        charset: 'utf8mb4',
        collation: 'utf8mb4_general_ci'
    });

    Rental.associate = (db) => {};
    return Rental;
}