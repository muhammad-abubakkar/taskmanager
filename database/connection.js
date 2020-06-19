const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/taskmanager', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.once('open', () => {
  console.log('We are connected with mongodb');
})

require('./project')
require('./task')

module.exports = db;