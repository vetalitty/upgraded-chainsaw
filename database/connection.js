const mongoose = require('mongoose');
const { db: { url } } = require('../config');

mongoose.connect(url);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error('MongoDB connection error'));

module.exports = db;
