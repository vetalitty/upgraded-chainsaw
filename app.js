const http = require('http');

// 3rd party
const Koa = require('koa');
const logger = require('koa-logger');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');

// 1st party
const routes = require('./routes');
const errorMiddleware = require('./middleware/error');

const app = new Koa();
app.use(logger());
app.use(errorMiddleware);

const config = {
  cors: {
    origin: '*',
    exposeHeaders: ['Authorization'],
    credentials: true,
    allowMethods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowHeaders: ['Authorization', 'Content-Type'],
    keepHeadersOnError: true,
  },
  bodyParser: {
    enableTypes: ['json', 'form'],
  },
};
app.use(cors(config.cors));
app.use(bodyParser(config.bodyParser));

app.use(routes.routes());
app.use(routes.allowedMethods());

app.server = require('http-shutdown')(http.createServer(app.callback()));

app.shutDown = function shutDown() {
  console.log('Shutdown');
};

module.exports = app;
