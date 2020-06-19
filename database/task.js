const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  _projectId: mongoose.Schema.Types.ObjectId,
  title: String,
  done: {type: Boolean, default: false},
  detail: String,
});

const Task = mongoose.model('task', taskSchema, 'tasks');

module.exports = Task;