const Router = require('koa-router');
const ctrl = require('../controllers');

const router = new Router();

router.get('/employees', ctrl.employee.getAll);
router.get('/employees/:id', ctrl.employee.get);

module.exports = router.routes();
