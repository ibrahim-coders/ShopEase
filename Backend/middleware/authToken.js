const jwt = require('jsonwebtoken');

const authToken = (req, res, next) => {
  const token = req.cookies?.token;
  console.log('Token:', token);

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token found' });
  }

  try {
    if (!process.env.TOKEN_SECRET_KEY) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    req.user = decoded; // Attach user info to request
    next(); // Pass control to the next middleware or route handler
  } catch (error) {
    console.error('Token verification error:', error);
    return res
      .status(403)
      .json({ message: 'Forbidden - Invalid token', error: error.message });
  }
};

module.exports = authToken;
