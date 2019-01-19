const mongoose = require('mongoose');
const organizationSchema = require('./organization');
const departmentSchema = require('./department');

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "firstNameRequired"],
  },
  lastName: {
    type: String,
    required: [true, "lastNameRequired"]
  },
  patronymic: {
    type: String,
    required: [true, "patronymicRequired"]
  },
  personalNumber: {
    type: Number,
    required: [true, "personalNumberRequired"]
  },
  organizationId: organizationSchema,
  departmentId: departmentSchema
});
employeeSchema.index({ "organizationId": 1, "departmentId": 1 }, { "unique": true });
module.exports = mongoose.model('Employee', employeeSchema);
