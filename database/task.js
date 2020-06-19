const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  projectId: mongoose.Schema.Types.ObjectId,
  title: String,
  done: {type: Boolean, default: false},
  detail: String,
}, {timestamps: true});

const Task = mongoose.model('task', taskSchema, 'tasks');

module.exports = Task;