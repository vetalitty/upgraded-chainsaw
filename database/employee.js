const Employee = require('../models/employee');

module.exports = {
  get(id) {
    return Employee.findOne({_id: id}).populate('departmentId').populate('organizationId');
  },
  getAll() {
    return Employee.find({}).populate('departmentId').populate('organizationId');
  },
};
