const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: 'You need to enter a first name!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  lastName: {
    type: String,
    required: 'You need to enter a last name!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  email: {
    type: String,
    required: 'You need to enter an email address!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  school: {
    type: Schema.Types.ObjectId, ref: 'School',
  },
});

const User = model('User', userSchema);

module.exports = User;
