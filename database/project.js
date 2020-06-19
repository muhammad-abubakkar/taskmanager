const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  url: String,
  description: String,
}, {timestamps: true});

const Project = mongoose.model('project', projectSchema, 'projects');

module.exports = Project;