'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProjectMember = sequelize.define('ProjectMember', {
        project_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        member_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        member_type: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName: 'ProjectMember',
        timestamps: false,
        charset: 'utf8mb4',
        collation: 'utf8mb4_general_ci'
    });

    ProjectMember.associate = (db) => {};
    return ProjectMember;
};