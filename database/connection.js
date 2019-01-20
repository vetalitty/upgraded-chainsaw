const mongoose = require('mongoose');
const { db: { url } } = require('../config');

let connection;
async function getConnection() {
  if (connection) return connection;
  connection = await mongoose.connect(url, { useNewUrlParser: true });
}

module.exports = getConnection;
