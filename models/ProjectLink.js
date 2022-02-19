'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProjectLink = sequelize.define('ProjectLink', {
        project_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName: 'ProjectLink',
        timestamps: false,
        charset: 'utf8mb4',
        collation: 'utf8mb4_general_ci'
    });

    ProjectLink.associate = (db) => {};
    return ProjectLink;
}