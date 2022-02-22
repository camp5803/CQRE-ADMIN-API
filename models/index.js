'use strict';

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// define tables
db.Book = require('./Book')(sequelize, Sequelize);
db.Comment = require('./Comment')(sequelize, Sequelize);
db.Delinquent = require('./Delinquent')(sequelize, Sequelize);
db.File = require('./File')(sequelize, Sequelize);
db.HashTag = require('./HashTag')(sequelize, Sequelize);
db.Notification = require('./Notification')(sequelize, Sequelize);
db.Post = require('./Post')(sequelize, Sequelize);
db.PostHashTag = require('./PostHashTag')(sequelize, Sequelize);
db.Project = require('./Project')(sequelize, Sequelize);
db.ProjectLink = require('./ProjectLink')(sequelize, Sequelize);
db.ProjectMember = require('./ProjectMember')(sequelize, Sequelize);
db.Rental = require('./Rental')(sequelize, Sequelize);
db.Scrap = require('./Scrap')(sequelize, Sequelize);
db.Supply = require('./Supply')(sequelize, Sequelize);
db.User = require('./User')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// define relations

db.HashTag.hasMany(db.PostHashTag, { foreignKey: 'hashtag_id', sourceKey: 'hashtag_id' });
db.Post.hasMany(db.Comment, { foreignKey: 'post_id', sourceKey: 'post_id' });
db.Post.hasMany(db.PostHashTag, { foreignKey: 'post_id', sourceKey: 'post_id' });
db.Post.hasMany(db.Scrap, { foreignKey: 'post_id', sourceKey: 'post_id' });
db.Project.hasMany(db.ProjectLink, { foreignKey: 'project_id', sourceKey: 'project_id' });
db.Project.hasMany(db.ProjectMember, { foreignKey: 'project_id', sourceKey: 'project_id' });
db.User.hasMany(db.Comment, { foreignKey: 'author_id', sourceKey: 'user_id' });
db.User.hasOne(db.Delinquent, { foreignKey: 'user_id', sourceKey: 'user_id' });
db.User.hasMany(db.Post, { foreignKey: 'author_id', sourceKey: 'user_id' });
db.User.hasMany(db.ProjectMember, { foreignKey: 'member_id', sourceKey: 'user_id' });
db.User.hasMany(db.Scrap, { foreignKey: 'user_id', sourceKey: 'user_id' });

// belongs

db.Comment.belongsTo(db.Post, { foreignKey: 'post_id', targetKey: 'post_id' });
db.Comment.belongsTo(db.User, { foreignKey: 'author_id', targetKey: 'user_id' });
db.Delinquent.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'user_id' });
db.Post.belongsTo(db.User, { foreignKey: 'author_id', targetKey: 'user_id' });
db.PostHashTag.belongsTo(db.HashTag, { foreignKey: 'hashtag_id', targetKey: 'hashtag_id' });
db.PostHashTag.belongsTo(db.Post, { foreignKey: 'post_id', targetKey: 'post_id' });
db.ProjectLink.belongsTo(db.Project, { foreignKey: 'project_id', targetKey: 'project_id' });
db.ProjectMember.belongsTo(db.Project, { foreignKey: 'project_id', targetKey: 'project_id' });
db.ProjectMember.belongsTo(db.User, { foreignKey: 'member_id', targetKey: 'user_id' });
db.Scrap.belongsTo(db.Post, { foreignKey: 'post_id', targetKey: 'post_id' });
db.Scrap.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'user_id' });

// will be modified

db.Book.hasMany(db.Rental, { foreignKey: 'book_id', sourceKey: 'book_id' });
db.Post.hasMany(db.Notification, { foreignKey: 'not_post', sourceKey: 'post_id' });
db.User.hasMany(db.Rental, { foreignKey: 'user_id', sourceKey: 'user_id' });
db.User.hasMany(db.Notification, { foreignKey: 'receiver_id', sourceKey: 'user_id' });
db.User.hasMany(db.Notification, { foreignKey: 'sender_id', sourceKey: 'user_id' });

// belongs

db.Rental.belongsTo(db.Book, { foreignKey: 'book_id', targetKey: 'book_id' });
db.Notification.belongsTo(db.Post, { foreignKey: 'not_post', targetKey: 'post_id' });
db.Rental.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'user_id' });
db.Notification.belongsTo(db.User, { foreignKey: 'receiver_id', targetKey: 'user_id' });
db.Notification.belongsTo(db.User, { foreignKey: 'sender_id', targetKey: 'user_id' });

module.exports = db;
