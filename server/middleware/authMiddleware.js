const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming you have a User model
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch the user from database to get all user details including role
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    req.user = user; // Attach the complete user object
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Forbidden: Invalid token' });
  }
};

module.exports = authMiddleware;
