// Import necessary modules
const { User } = require('./models');
const jwt = require('jsonwebtoken');

// Secret key for JWT (should be stored securely, preferably in an environment variable)
const secretKey = 'yourSecretKey';

// Function to generate a JWT token
const generateToken = (user) => {
  // Create a payload with user ID and username
  const payload = {
    id: user.id,
    username: user.username,
  };

  // Sign the payload to generate a JWT token with a 1-hour expiration
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

// Middleware to authenticate requests
const authenticateUser = (req, res, next) => {
  // Extract the token from the request headers
  const token = req.headers.authorization;

  // Check if the token is missing
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing.' });
  }

  // Verify the token using the secret key
  jwt.verify(token, secretKey, (err, decoded) => {
    // Handle invalid tokens
    if (err) {
      return res.status(401).json({ message: 'Invalid token.' });
    }

    // Find the user based on the decoded ID from the token
    User.findById(decoded.id, (error, user) => {
      // Handle errors or non-existent users
      if (error || !user) {
        return res.status(401).json({ message: 'User not found.' });
      }

      // Attach the user object to the request for subsequent middleware or routes
      req.user = user;
      next();
    });
  });
};

// Function to handle user login
const loginUser = async (username, password) => {
  try {
    // Find the user by username
    const user = await User.findOne({ username });

    // Check for invalid credentials
    if (!user || !user.comparePassword(password)) {
      return null; // Invalid credentials
    }

    // Generate a JWT token for the authenticated user
    const token = generateToken(user);
    return token;
  } catch (error) {
    // Log and throw any errors that occur during login
    console.error(error);
    throw error;
  }
};

// Export the functions for use in other files
module.exports = {
  generateToken,
  authenticateUser,
  loginUser,
};
