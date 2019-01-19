const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  financialCode: {
    type: Number,
    maxlength: 20,
    minlength: 20,
    required: [true, "financialCodeRequired"],
  },
  shortName: {
    maxlength: 1,
    minlength: 20,
    type: Number,
    required: [true, "shortNameRequired"]
  },
  fullName: {
    maxlength: 1,
    minlength: 50,
    type: Number,
    required: [true, "shortNameRequired"]
  },
});
module.exports = mongoose.model('Department', departmentSchema);
