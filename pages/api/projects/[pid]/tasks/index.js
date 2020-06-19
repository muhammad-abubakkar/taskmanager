const mongoose = require('mongoose');

const Task = mongoose.model('task');

function get(req, res) {
  Task.find({projectId: req.query.pid}, function(err, tasks) {
    if (err !== null) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    }
    res.json({
      tasks,
    })
  });
}

function post(req, res) {
  res.json({message: 'Created'});
}


module.exports = function (req, res) {
  switch(req.method) {
    case 'GET':
      get(req, res); break
    case 'POST':
      post(req, res); break
    default:
      res.status(405).json({message: 'Method not allowed'})
  }
}