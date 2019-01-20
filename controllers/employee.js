const _ = require('lodash');
const db = require('../database');

module.exports = {
  async get(ctx) {
    const id = ctx.params.id;
    let employee = {};
    try {
      employee = await db.employee.get(id);
    } catch (e) {
    }
    ctx.body = { message: 'success', employee };
  },
  async getAll(ctx) {
    let employees = [];
    try {
      employees = await db.employee.getAll();
    } catch (e) {
    }
    ctx.body = { message: 'success', employees };
  },
};
