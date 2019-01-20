const { server: { port } } = require('../config');
const serverApp = require('../app');
const connection = require('../database/connection');
const seed = require('../database/seed');

/**
 * Error handling for system calls
 *
 * @param {object} error - errors
 * return {object} throw - or process.exit
 * */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind;
  if (typeof port === 'string') {
    bind = `Pipe ${port}`;
  } else {
    bind = `Port ${port}`;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      return process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      return process.exit(1);
    default:
      throw error;
  }
}

/**
 * On listening event
 * */
function onListening() {
}

async function start(app) {
  app.server.listen(port);
  await connection();
  await seed();
  app.server.on('error', onError);
  app.server.on('listening', onListening);
}

process.on('SIGTERM', async() => {
  const conn = await connection();
  await conn.connection.close();
  console.info('Graceful shutdown');
  process.exit(0);
});

process.on('SIGINT', async() => {
  const conn = await connection();
  await conn.connection.close();
  console.info('Graceful shutdown');
  process.exit(0);
});

start(serverApp);
