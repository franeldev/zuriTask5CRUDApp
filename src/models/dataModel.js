// Create Schema
const mongoose = require('mongoose');
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: (val) => {
        const valNoSpaces = val.split(' ').join('');
        return validator.isAlpha(valNoSpaces, 'en-GB');
        },
        message: 'String have to contain only alphanumeric with spaces'
      }
  },

  email: {
    type: String,
    unique: true,
    required: [true, "Path `email` is required"],
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
      isAsync: false
    }
  },

  country: {
    type: String,
    required: true
  }
});
const Userdb = mongoose.model('Userdb', userSchema);

module.exports = Userdb;