const mongoose = require('mongoose');

const Project = mongoose.model('project');

function get(req, res) {
  Project.find(function(err, projects) {
    if (err !== null) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    }
    res.json({
      projects,
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