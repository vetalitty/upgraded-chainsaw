const mongoose = require('mongoose');
const Organization = require('./organization');
const Department = require('./department');

const employeeSchema = mongoose.Schema({
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
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  },
  departmentId:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  }
},{
  versionKey: false
});
employeeSchema.index({ "organizationId": 1, "departmentId": 1 }, { "unique": true });
module.exports = mongoose.model('Employee', employeeSchema);
