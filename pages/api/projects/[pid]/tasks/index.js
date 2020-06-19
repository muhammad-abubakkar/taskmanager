const mongoose = require('mongoose');

const Task = mongoose.model('task');

async function get(req, res) {
  try {
    let tasks = await Task.find({projectId: req.query.pid}, null, {sort: {createdAt: 1}})
    res.json({tasks})
  } catch(e) {
    res.status(500).json({message: 'Something went wrong'})
  }
}

async function post(req, res) {
  let data = new Task(req.body);
  data.projectId = req.query.pid;

  try {
    let task = await data.save()
    res.json({task});
  } catch(e) {
    res.status(500).json()
  }
}


module.exports = function (req, res) {
  switch(req.method) {
    case 'GET':
      return  get(req, res); break
    case 'POST':
      return post(req, res); break
    default:
      return res.status(405).json({message: 'Method not allowed'})
  }
}