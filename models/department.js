const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
  financialCode: {
    type: String,
    minlength: 20,
    maxlength: 20,
    required: [true, "financialCodeRequired"],
  },
  shortName: {
    minlength: 1,
    maxlength: 20,
    type: String,
    required: [true, "shortNameRequired"]
  },
  fullName: {
    minlength: 1,
    maxlength: 50,
    type: String,
    required: [true, "fullNameRequired"]
  },
},{
  versionKey: false
});
module.exports = mongoose.model('Department', departmentSchema);
