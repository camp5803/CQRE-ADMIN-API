'use strict';

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        project_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        project_title: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        project_content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        started_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        finished_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'Project',
        timestamps: false,
        charset: 'utf8mb4',
        collation: 'utf8mb4_general_ci'
    });

    Project.associate = (db) => {};
    return Project;
}