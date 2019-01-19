const _ = require('lodash');
const db = require('../database');

module.exports = {
  async get(ctx) {
    const id = ctx.params.id;

    ctx.body = { message: 'success' };
  },
  async getAll(ctx) {

    ctx.body = { user: _.omit(user, ['password']), message: 'success' };
  },
};
