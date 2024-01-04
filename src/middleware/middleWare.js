// isAdminMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
// Assuming you have a user model

exports.isAdminMiddleware = async (req, res, next) => {
  const token = req.header('token');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your JWT secret key

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(403).json({ error: 'Access denied. Invalid user.' });
    }

    if (user.isAdmin === true) {
      // If the user is an admin, allow access to the route
      req.user = user; // Attach the user object to the request for further use
      next();
    } else {
      // If the user is not an admin, send a 403 Forbidden response
      res.status(403).json({ error: 'Access denied. You are not an admin.' });
    }
  } catch (error) {
    res.status(401).json({ error: 'Access denied. Invalid token.' });
  }
};

exports.isUserLoggedInMiddleware = async (req, res, next) => {
  const token = req.header('token');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your JWT secret key

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(403).json({ error: 'Access denied. Invalid user.' });
    }

    if (user.userEmail) {
      // If the user is an admin, allow access to the route
      req.user = user; // Attach the user object to the request for further use
      next();
    } else {
      // If the user is not an admin, send a 403 Forbidden response
      res.status(403).json({ error: 'Access denied. You are not an admin.' });
    }
  } catch (error) {
    res.status(401).json({ error: 'Access denied. Invalid token.' });
  }
};


