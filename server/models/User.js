// Import necessary modules
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const dateFormat = require('../utils/dateFormat');

// Define the schema for the User model
const userSchema = new Schema({
  // User's first name properties
  firstName: {
    type: String,
    required: 'You need to enter a first name!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },

  // User's last name properties
  lastName: {
    type: String,
    required: 'You need to enter a last name!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },

  // User's email properties with validation
  email: {
    type: String,
    required: 'You need to enter an email address!',
    minlength: 1,
    maxlength: 280,
    trim: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },

  // User's password properties
  password: {
    type: String,
    required: 'You need to enter a password!',
    minlength: 8,
  },

  // Timestamp for user creation
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Set up pre-save middleware to hash the user's password before saving
userSchema.pre('save', async function (next) {
  // Check if the password is new or modified before hashing
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    // Hash the user's password using bcrypt
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Method to compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  // Use bcrypt to compare the provided password with the stored hashed password
  return await bcrypt.compare(password, this.password);
};

// Create the User model using the defined schema
const User = model('User', userSchema);

// Export the User model for use in other files
module.exports = User;
