// Importing the necessary models and packages
const { User, MenuItem, School } = require('../models');
const bcrypt = require('bcrypt');
const {
  generateToken,
  loginUser,
  AuthenticationError,
} = require('../utils/auth'); 

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
  Mutation: {
    signupUser: async (
      _parent,
      { firstName, lastName, email, password, school },
    ) => {
      try {
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in the database
        const user = await User.create({
          firstName,
          lastName,
          email,
          password: hashedPassword,
          school,
        });

        // Generate a token for the new user
        const token = generateToken({
          id: user._id,
          username: user.username,
        });

        // Return the token and user information
        return { token, user };
      } catch (error) {
        console.error('Error during user signup:', error);
        // Handle the error and throw it or return an error message
        throw new AuthenticationError(
          'An error occurred during signup. Please try again.',
        );
      }
    },

    // Mutation resolver for loginUser
    loginUser: async (_parent, { email, password }) => {
      try {
        // Call the loginUser function from the auth module
        const { token, user } = await loginUser(email, password);

        // Check if the login was successful
        if (!token || !user) {
          // If not successful, throw an authentication error
          throw new AuthenticationError('Invalid credentials');
        }

        // If successful, return the token and user information
        return { token, user };
      } catch (error) {
        // Log and throw any errors that occur during login
        console.error(error);
        throw new AuthenticationError('Invalid credentials');
      }
    },
  },
};

module.exports = resolvers;
