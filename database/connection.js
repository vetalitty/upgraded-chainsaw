const mongoose = require('mongoose');
mongoose.connection.on('error', (err) => console.error('MongoDB connection error:', err));

const { db: { url } } = require('../config');

let connection;
async function getConnection() {
  if (connection) return connection;
  connection = mongoose.connect(url, { useNewUrlParser: true });
}

module.exports = getConnection;
