const mongoose = require('mongoose');

const Task = mongoose.model('task');

async function get(req, res) {
  try {
    let task = await Task.findById(req.query.tid)
    res.json({task})
  } catch(e) {
    res.status(500).json({message: 'Something went wrong'})
  }
}

async function put(req, res) {
  try {
    let task = await Task.findById(req.query.tid)
    task.title = req.body.title;
    task.done = req.body.done;
    task.detail = req.body.detail;
    await task.save();
    res.json({task});
  } catch (e) {
    res.status(500).json({message: 'Something went wrong'})
  }
}

async function del(req, res) {
  try {
    await Task.deleteOne({_id: req.query.tid});
    res.json({message: 'Task Deleted'});
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