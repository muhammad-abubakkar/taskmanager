const mongoose = require('mongoose');

const Project = mongoose.model('project');
const Task = mongoose.model('task');

function get(req, res) {
  Project.findById(req.query.id, function(err, project) {
    if (err !== null) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    }
    Task.find({"projectId": String(project._id)}, function(err, tasks) {
      res.json({
        project,
        tasks
      })
    })
  });
}

function put(req, res) {
  res.json({message: 'Updated'});
}

function del(req, res) {
  res.json({message: 'Deleted'});
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