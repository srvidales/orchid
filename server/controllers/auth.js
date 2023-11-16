const { User } = require('./models'); // Adjust the path as needed
const jwt = require('jsonwebtoken');

// Secret key for JWT (should be stored securely, preferably in an environment variable)
const secretKey = 'yourSecretKey';

// Function to generate a JWT token
const generateToken = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
    // Add more user-related information if needed
  };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

// Middleware to authenticate requests
const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing.' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token.' });
    }

    // Assuming you have a User.findById method
    User.findById(decoded.id, (error, user) => {
      if (error || !user) {
        return res.status(401).json({ message: 'User not found.' });
      }

      req.user = user;
      next();
    });
  });
};

// Function to handle user login
const loginUser = async (username, password) => {
  try {
    const user = await User.findOne({ username });

    if (!user || !user.comparePassword(password)) {
      return null; // Invalid credentials
    }

    const token = generateToken(user);
    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  generateToken,
  authenticateUser,
  loginUser,
};