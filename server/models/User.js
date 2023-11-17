const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
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
    unique: true,    
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: 'You need to enter a password!',
    minlength: 8,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  schoolId: {
    type: Schema.Types.ObjectId,
    ref: 'School',
  },
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
