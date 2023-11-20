const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secretKey = 'mysecretssshhhhhhh';
const expiration = '1h';

const generateToken = ({ id, username }) => {
  const payload = { id, username };
  return jwt.sign({ data: payload }, secretKey, { expiresIn: expiration });
};

const loginUser = async (email, password) => {
  try {
    // Find the user by their email
    const user = await User.findOne({ email });

    // Check for invalid credentials
    if (!user || !(await user.isCorrectPassword(password))) {
      // Invalid credentials
      return null;
    }

    // Valid credentials, generate and return a token
    // Generate a JWT token for the authenticated user
    const token = generateToken({ id: user._id, username: user.username });
    return token;
  } catch (error) {
    // Log and throw any errors that occur during login
    console.error(error);
    throw error;
  }
};

const AuthenticationError = new GraphQLError('Could not authenticate user.', {
  extensions: {
    code: 'UNAUTHENTICATED',
  },
});

// Export the functions for use in other files
module.exports = {
  generateToken,
  loginUser,
  AuthenticationError,
};
