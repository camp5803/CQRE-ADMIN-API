const { Project, ProjectMember } = require('../models');
const { literal } = require('sequelize')

const createProject = async (req, res) => {
    await Project.create({
        project_title: req.body.project_title,
        project_content: req.body.project_content,
        started_at: literal('CURRENT_TIMESTAMP')
    });

    return res.json({ status: "success" });
}

const addProjectMember = async (req, res) => {
    await ProjectMember.create({
        where: {
            project_id: req.params.pid,
            member_id: req.body.member_id,
            member_type: req.body.member_type
        }
    });
}

const deleteProject = async (req, res) => {
    const data = await Project.findOne({
        where: { project_id: req.params.project_id },
        raw: true
    });

    if (data === null) {
        return res.status(400).json({
            status: "error",
            message: "Content not found in this parameter."
        });
    } else {
        await Project.destroy({
            where: { project_id: req.params.project_id }
        });
        return res.json({ status: "success" });
    }
}

const deleteProjectMember = async (req, res) => {
    const data = await ProjectMember.findOne({
        where: {
            project_id: req.params.project_id,
            member_id: req.params.member_id
        }
    })

    if (data === null) {
        return res.status(400).json({
            status: "error",
            message: "Content not found in this parameter."
        });
    } else {
        await ProjectMember.destroy({
            where: {
                project_id: req.params.pid,
                member_id: req.params.uid
            }
        });
        return res.json({ status: "success" });
    }
}

module.exports = {
    create: createProject,
    addMember: addProjectMember,
    destroy: deleteProject,
    destroyMember: deleteProjectMember
}