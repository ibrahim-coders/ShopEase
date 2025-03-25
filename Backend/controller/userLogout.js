const userLogOut = async (req, res) => {
  try {
    res.clearCookie('token');
    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    return res.status(500).json({
      message: err.message || 'Logout failed',
      error: true,
      success: false,
    });
  }
};

module.exports = userLogOut;
