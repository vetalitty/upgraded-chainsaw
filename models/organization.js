const mongoose = require('mongoose');

const organizationSchema = mongoose.Schema({
  INN: {
    type: Number,
    maxlength: 12,
    minlength: 12,
    required: [true, "innRequired"],
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
    required: [true, "shortNameRequired"]
  },
},{
  versionKey: false
});
module.exports = mongoose.model('Organization', organizationSchema);
