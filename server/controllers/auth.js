const jwt = require('jsonwebtoken');
const user = require('../models/User'); // Assuming you have a User model
// After validating user and password
const token = jwt.sign(
  {
    id: user._id,
    email: user.email,
    role: user.role, // ✅ Include this!
  },
  process.env.JWT_SECRET,
  { expiresIn: '1d' }
);

res.json({ token }); // Send this to frontend/Postman
