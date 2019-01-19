const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  INN: {
    type: Number,
    maxlength: 12,
    minlength: 12,
    required: [true, "innRequired"],
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
module.exports = mongoose.model('Department', organizationSchema);
