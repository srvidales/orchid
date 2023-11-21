const { AuthenticationError } = require('@apollo/server');
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
    if (!user && !(await user.isCorrectPassword(password))) {
      // If invalid credentials, throw an authentication error
      throw new AuthenticationError('Invalid credentials');
    }

    // Valid credentials, generate and return a JWT token
    // Generate a JSON Web Token (JWT) for the authenticated user
    const token = generateToken({ id: user._id, username: user.username });

    // Check if the token is generated successfully
    if (!token) {
      // If token generation fails, throw an authentication error
      throw new AuthenticationError('Invalid credentials');
    }

    // Return the generated token and user
    return { token, user };
  } catch (error) {
    // Log and throw any errors that occur during login
    console.error(error);
    throw new AuthenticationError(
      'An error occurred during login. Please try again.',
    );
  }
};

// Export the functions for use in other files
module.exports = { generateToken, loginUser };
