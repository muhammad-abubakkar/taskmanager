const mongoose = require('mongoose');

const Project = mongoose.model('project');
const Task = mongoose.model('task');

async function get(req, res) {
  try {
    let projects = await Project.find({}, null, {sort: {createdAt: 1}})
    
    res.json({projects})
  } catch(e) {
    res.status(500).json({message: 'Something went wrong'})
  }
}

async function post(req, res) {
  let data = new Project(req.body)
  try {
    let project = await data.save()
    res.json({project});
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