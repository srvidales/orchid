// Importing necessary modules from Mongoose and a utility function for date formatting
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Defining the schema for the DailyMenu model
const dailyMenuSchema = new Schema({
  // Date for the daily menu
  date: {
    type: Date,
    // required: "You need to enter a date!", // (Optional) Validation: Date is required
    get: (timestamp) => dateFormat(timestamp), // Applying custom date formatting using the dateFormat utility
  },

  // Array of menu items associated with the daily menu
  menuItems: [
    {
      type: Schema.Types.ObjectId, // Referencing the ObjectId type from Mongoose
      ref: 'MenuItem', // Reference to the MenuItem model
    },
  ],

  // Creation timestamp for the daily menu, defaulting to the current date
  createdAt: {
    type: Date,
    default: Date.now, // Default value is the current date and time
    get: (timestamp) => dateFormat(timestamp), // Applying custom date formatting using the dateFormat utility
  },
});

// Creating the DailyMenu model based on the defined schema
const DailyMenu = model('DailyMenu', dailyMenuSchema);

// Exporting the DailyMenu model for use in other parts of the application
module.exports = DailyMenu;
