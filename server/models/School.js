// Importing necessary modules from Mongoose and a utility function for date formatting
const { Schema, model } = require('mongoose');

// Define the schema for the School model
const schoolSchema = new Schema({
  // School name properties
  name: {
    type: String,
    required: 'You need to enter a name!',
    minlength: 1,
    maxlength: 280,
    unique: true,
    trim: true,
  },
  // School address properties
  address: {
    type: String,
    required: 'You need to enter an address!',
    minlength: 1,
    maxlength: 280,
    unique: true,
    trim: true,
  },
  // School city properties
  city: {
    type: String,
    required: 'You need to enter a city!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  // School state properties
  state: {
    type: String,
    required: 'You need to enter a state!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  // School zip code properties
  zip: {
    type: String,
    required: 'You need to enter a zip code!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  // School phone number properties
  phone: {
    type: String,
    required: 'You need to enter a phone number!',
    minlength: 1,
    maxlength: 280,
    unique: true,
    trim: true,
  },
  // School email properties with validation
  email: {
    type: String,
    required: 'You need to enter an email address!',
    minlength: 1,
    maxlength: 280,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  // Array of User references associated with the school
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  // Array of MenuItem references associated with the school
  menuItems: [
    {
      type: Schema.Types.ObjectId,
      ref: 'MenuItem',
    },
  ],
  // Array of DailyMenu references associated with the school
  dailyMenus: [
    {
      type: Schema.Types.ObjectId,
      ref: 'DailyMenu',
    },
  ],
  // Timestamp for school creation
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the School model using the defined schema
const School = model('School', schoolSchema);

// Export the School model for use in other files
module.exports = School;
