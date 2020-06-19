const mongoose = require('mongoose');

const Project = mongoose.model('project');
const Task = mongoose.model('task');

async function get(req, res) {
  try {
    let project = await Project.findById(req.query.pid)
    let tasks = await Task.find({"projectId": String(project._id)})
    res.json({project, tasks})
  } catch(e) {
    res.status(500).json({message: 'Something went wrong'})
  }
}

async function put(req, res) {
  try {
    let project = await Project.findById(req.query.pid)
    project.name = req.body.name;
    project.url = req.body.url;
    project.description = req.body.description;
    await project.save();
    res.json({project});
  } catch (e) {
    res.status(500).json({message: 'Something went wrong'})
  }
}

async function del(req, res) {
  try {
    await Project.deleteOne({_id: req.query.pid});
    res.json({message: 'Project Deleted'});
  } catch (e) {
    res.status(500).json({message: 'Something went wrong'})
  }
}

module.exports = function (req, res) {
  switch(req.method) {
    case 'GET':
      get(req, res); break
    case 'PUT':
      put(req, res); break
    case 'DELETE':
      del(req, res); break
    default:
      res.status(405).json({message: 'Method not allowed'})
  }
}