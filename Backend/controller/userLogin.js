const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/usermodels');

async function userLogin(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'Please provide both email and password',
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        error: true,
        success: false,
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).json({
        message: 'Invalid password',
        error: true,
        success: false,
      });
    }

    const tokenData = {
      _id: user._id,
      email: user.email,
      role: user.role || 'user', // If roles are implemented
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
      expiresIn: '8h', // Expiry in 8 hours
    });
    console.log('Token generated:', token);

    // Set token in a secure cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Ensure https in production
      sameSite: 'Strict',
      maxAge: 8 * 60 * 60 * 1000, // 8 hours
    });

    return res.status(200).json({
      message: 'Login successfully',
      data: token, // Return token data (optional)
      error: false,
      success: true,
    });
  } catch (error) {
    console.error('Error during login:', error.message);
    return res.status(500).json({
      message: 'Something went wrong, please try again later.',
      error: true,
      success: false,
    });
  }
}

module.exports = userLogin;
