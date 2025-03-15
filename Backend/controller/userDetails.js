const UserModel = require('../models/usermodels');

async function userDetails(req, res) {
  try {
    console.log('userId', req.user._id); // Corrected to use _id instead of _Id
    const user = await UserModel.findById(req.user._id); // Same fix here
    console.log(user);

    res.status(200).json({
      data: user,
      error: false,
      success: true, // Fixed typo 'sucess' to 'success'
      message: 'User details retrieved successfully',
    });
  } catch (err) {
    console.error('Error fetching user details:', err);
    res.status(400).json({
      message: err.message || 'An error occurred while fetching user details',
      error: true,
      success: false,
    });
  }
}

module.exports = userDetails;
