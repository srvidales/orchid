// Importing the necessary models
const { User, MenuItem, School, DailyMenu } = require('../models');

// Creating GraphQL resolvers
const resolvers = {
  Query: {
    // Resolver for fetching users with associated school information
    users: async () => {
      // Using the User model to find all users
      // Sorting them by creation date in descending order
      // Populating the 'schoolId' field to retrieve associated school information
      return await User.find().sort({ createdAt: -1 }).populate('schoolId');
    },

    // Resolver for fetching schools with associated menu items and daily menus
    schools: async () => {
      // Using the School model to find all schools
      // Sorting them by creation date in descending order
      // Populating the 'menuItems' field to retrieve associated menu items
      // Populating the 'users' field to retrieve associated users
      // Populating the 'menus' field to retrieve associated daily menus
      // Nested population to retrieve menu items within each daily menu
      return await School.find()
        .sort({ createdAt: -1 })
        .populate('menuItems')
        .populate('users')
        .populate({
          path: 'menus',
          populate: { path: 'menuItems' },
        });
    },

    // Resolver for fetching a school by its id
    schoolById: async (_, { _id }) => {
      // Using the School model to find a school by its id
      return await School.findById(_id);
    },

    // Resolver for fetching menu items
    menuItems: async () => {
      // Using the MenuItem model to find all menu items
      // Sorting them by creation date in descending order
      return await MenuItem.find().sort({ createdAt: -1 });
      // Populating the 'school' field, uncomment if needed
      // return await MenuItem.find().sort({ createdAt: -1 }).populate('school');
    },

    // Resolver for fetching daily menus
    menus: async () => {
      // Using the DailyMenu model to find all daily menus
      // Sorting them by creation date in descending order
      return await DailyMenu.find().sort({ createdAt: -1 });
    },
  },
};

// Exporting the resolvers for use in the GraphQL schema
module.exports = resolvers;
