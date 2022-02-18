'use strict';

module.exports = (sequelize, DataTypes) => {
    const PostHashTag = sequelize.define('PostHashTag', {
        post_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        hashtag_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }
    }, {
        tableName: 'PostHashTag',
        timestamps: false,
        charset: 'utf8mb4',
        collation: 'utf8mb4_general_ci'
    });

    PostHashTag.associate = (db) => {};
    return PostHashTag;
};