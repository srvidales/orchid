// Importing the necessary models and packages
const { User, MenuItem, School, DailyMenu } = require('../models');
const bcrypt = require('bcrypt');
const { generateToken, loginUser } = require('../utils/auth');

// Creating GraphQL resolvers
const resolvers = {
  Query: {
    // Resolver for fetching all users
    users: async () => {
      try {
        // Using the User model to find all users
        return await User.find();
      } catch (error) {
        // Log and throw any errors that occur during the query
        console.error('Error during user fetch:', error);
        throw new Error('An error occurred while fetching users.');
      }
    },

    // Resolver for fetching daily menus by school and date
    dailyMenusBySchoolAndDate: async (_parent, { schoolId, date }) => {
      try {
        // Use the DailyMenu model to find menus matching the given school and date
        // Populate the 'menuItems' field to retrieve details for each menu item
        // Populate the 'school' field to retrieve details for the associated school
        const dailyMenus = await DailyMenu.find({
          school: schoolId,
          date: date,
        })
          .populate('menuItems')
          .populate('school');

        // Return the array of daily menus
        return dailyMenus;
      } catch (error) {
        // Log the error for debugging purposes
        console.error('Error during daily menus fetch:', error);
        // Throw an authentication error with a custom error message
        throw new AuthenticationError(
          'An error occurred while fetching daily menus.',
        );
      }
    },

    // Resolver for fetching daily menus by school, date, and meal
    dailyMenusBySchoolDateAndMeal: async (
      _parent,
      { schoolId, date, meal },
    ) => {
      try {
        // Use the DailyMenu model to find menus matching the given school, date, and meal
        // Populate the 'menuItems' field to retrieve details for each menu item
        // Populate the 'school' field to retrieve details for the associated school
        const dailyMenus = await DailyMenu.find({
          school: schoolId,
          date: date,
          meal: meal,
        })
          .populate('menuItems')
          .populate({
            path: 'school',
            populate: {
              path: 'dailyMenus',
              populate: {
                path: 'menuItems',
              },
            },
          });
        // Return the array of daily menus
        return dailyMenus;
      } catch (error) {
        // Log and throw any errors that occur during the query
        console.error('Error during daily menu fetch:', error);
        throw new Error('An error occurred while fetching daily menu.');
      }
    },
    // Resolver for fetching schools with associated menu items and daily menus
    schools: async () => {
      // Using the School model to find all schools
      // Sorting them by creation date in descending order
      // Populating the 'menuItems' field to retrieve associated menu items
      // Populating the 'users' field to retrieve associated users
      // Populating the 'dailyMenus' field to retrieve associated daily menus
      // Nested population to retrieve menu items within each daily menu
      return await School.find()
        .sort({ createdAt: -1 })
        .populate('menuItems')
        .populate('users')
        .populate({
          path: 'dailyMenus',
          populate: { path: 'menuItems' },
        });
    },

    // Resolver for fetching a specific school by ID
    schoolById: async (_parent, { _id }) => {
      try {
        // Use the School model to find the school by its ID
        // Populate the 'menuItems' field to retrieve associated menu items
        // Populate the 'users' field to retrieve associated users
        // Populate the 'dailyMenus' field to retrieve associated daily menus
        // Nested population to retrieve menu items within each daily menu
        // Populate 'menuItems' field inside 'dailyMenus'
        const school = await School.findById(_id)
          .populate('menuItems')
          .populate('users')
          .populate({
            path: 'dailyMenus',
            populate: { path: 'menuItems' },
          });

        // Return the school data
        return school;
      } catch (error) {
        // Log and throw any errors that occur during the query
        console.error(`Error during school fetch for ID ${_id}:`, error);
        throw new Error('An error occurred while fetching the school.');
      }
    },

    // Resolver for fetching menu items
    menuItems: async () => {
      try {
        // Using the MenuItem model to find all menu items
        // Sorting them by creation date in descending order
        return await MenuItem.find().sort({ createdAt: -1 });
      } catch (error) {
        // Log and throw any errors that occur during the query
        console.error('Error during menu items fetch:', error);
        throw new Error('An error occurred while fetching menu items.');
      }
    },

    // Resolver that fetches daily menus and populates each one with its associated menu items
    dailyMenus: async () => {
      try {
        // Using the DailyMenu model to find all daily menus
        // Sorting them by creation date in descending order
        const dailyMenus = await DailyMenu.find().sort({ createdAt: -1 });

        // Populate the 'menuItems' field for each daily menu
        const populatedDailyMenus = await DailyMenu.populate(dailyMenus, {
          path: 'menuItems',
        });

        // Return the daily menus with populated menu items
        return populatedDailyMenus;
      } catch (error) {
        // Log and throw any errors that occur during the query
        console.error('Error during daily menus fetch:', error);
        throw new Error('An error occurred while fetching daily menus.');
      }
    },
  },
  Mutation: {
    // Mutation resolver for signupUser
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
        throw new Error('An error occurred during signup. Please try again.');
      }
    },

    // Mutation resolver for loginUser
    loginUser: async (_parent, { email, password }) => {
      try {
        // Call the loginUser function from the auth module
        const result = await loginUser(email, password);

        // Check if the login was successful
        if (!result || !result.token || !result.user) {
          // If not successful, throw an authentication error
          throw new Error('Invalid credentials');
        }

        // If successful, return the token and user information
        return { token: result.token, user: result.user };
      } catch (error) {
        // Log and throw any errors that occur during login
        console.error(error);
        throw new Error('Invalid credentials');
      }
    },

    // Mutation resolver for updateUser
    updateUser: async (
      _parent,
      { userId, firstName, lastName, email, password },
    ) => {
      try {
        // Find the user by ID
        const user = await User.findByIdAndUpdate(
          userId, // The unique identifier of the user to be updated
          {
            // Only update the fields that are provided
            // If 'firstName' is provided, update the 'firstName' field
            ...(firstName && { firstName }),
            // If 'lastName' is provided, update the 'lastName' field
            ...(lastName && { lastName }),
            // If 'email' is provided, update the 'email' field
            ...(email && { email }),
            // Hash and update the password if provided
            // If 'password' is provided, hash the new password using bcrypt with 10 salt rounds,
            // and update the 'password' field in the database
            ...(password && { password: await bcrypt.hash(password, 10) }),
          },
          { new: true }, // Return the updated document after the update is applied
        );

        // Return the updated user
        return user;
      } catch (error) {
        // Log and throw any errors that occur during updating user
        console.error(error);
        throw new Error(
          'An error occurred during user update. Please try again.',
        );
      }
    },

    // Mutation resolver for adding a daily menu
    addDailyMenu: async (_parent, { date, meal, menuItems }) => {
      try {
        // Create a new daily menu in the database
        const dailyMenu = await DailyMenu.create({
          date,
          meal,
          menuItems,
        });

        // Populate the menuItems field to retrieve details for each menu item
        const populatedDailyMenu = await DailyMenu.populate(dailyMenu, {
          path: 'menuItems',
        });

        // Return the newly created daily menu with populated menuItems
        return populatedDailyMenu;
      } catch (error) {
        // Log and throw any errors that occur during daily menu creation
        console.error(error);
        throw new Error(
          'An error occurred during daily menu creation. Please try again.',
        );
      }
    },
  },
};

module.exports = resolvers;
