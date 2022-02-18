'use strict';

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// define tables
db.Book = require('./Book')(sequelize, Sequelize);
db.Comment = require('./Comment')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// define relations

module.exports = db;
