// Importing necessary modules from Mongoose and a utility function for date formatting
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

// Defining the schema for the DailyMenu model
const dailyMenuSchema = new Schema({
  // Date for the daily menu
  date: {
    type: Date,
    default: Date.now,
    get: (date) => dateFormat(date)
  },
  // Type definition for the meal property
  meal: {
    type: String, // Meal is represented as a string
    enum: ['BREAKFAST', 'SNACK', 'LUNCH'], // Enumerated values for meal: BREAKFAST, SNACK, or LUNCH
  },
  // Array of menu items associated with the daily menu
  menuItems: [
    {
      type: Schema.Types.ObjectId, // Referencing the ObjectId type from Mongoose
      ref: 'MenuItem', // Reference to the MenuItem model
    },
  ],
},
{
  toJson: {
    getters: true
  }
});

// Creating the DailyMenu model based on the defined schema
const DailyMenu = model('DailyMenu', dailyMenuSchema);

// Exporting the DailyMenu model for use in other parts of the application
module.exports = DailyMenu;
