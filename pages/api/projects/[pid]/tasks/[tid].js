const mongoose = require('mongoose');

const Task = mongoose.model('task');

function get(req, res) {
  Task.findById(req.query.tid, function(err, task) {
    if (err !== null) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    }
    res.json({
      task
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