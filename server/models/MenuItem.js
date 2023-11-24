// Importing necessary modules from Mongoose and a utility function for date formatting
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Defining the schema for the MenuItem model
const menuItemSchema = new Schema({
  // Name of the menu item
  name: {
    type: String,
    required: 'You need to enter a name!', // Validation: Name is required
    minlength: 1, // Validation: Minimum length of 1 character
    maxlength: 280, // Validation: Maximum length of 280 characters
    trim: true, // Trimming leading and trailing whitespaces
  },

  // Description of the menu item
  description: {
    type: String,
    required: 'You need to enter a description!', // Validation: Description is required
    minlength: 1, // Validation: Minimum length of 1 character
    maxlength: 280, // Validation: Maximum length of 280 characters
    trim: true, // Trimming leading and trailing whitespaces
  },

  // Image URL for the menu item (optional)
  image: {
    type: String,
  },

  // Category of the menu item (ENTREE, SIDE, DRINK, SNACK)
  category: {
    type: String,
    required: 'You need to enter a category!', // Validation: Category is required
    enum: ['ENTREE', 'SIDE', 'DRINK', 'SNACK'], // Validation: Category must be one of these values
  },

  school: {
    type: Schema.Types.ObjectId,
    ref: 'School',
  },

  // Creation timestamp for the menu item, defaulting to the current date
  createdAt: {
    type: Date,
    default: Date.now, // Default value is the current date and time
    get: (timestamp) => dateFormat(timestamp), // Applying custom date formatting using the dateFormat utility
  },
});

// Creating the MenuItem model based on the defined schema
const MenuItem = model('MenuItem', menuItemSchema);

// Exporting the MenuItem model
module.exports = MenuItem;
