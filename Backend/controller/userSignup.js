const UserModel = require('../models/usermodels');
const bcrypt = require('bcryptjs');

async function userSignUp(req, res) {
  const { email, password, name, image, role } = req.body;
  console.log(email, password, name, image);
  const userExist = await UserModel.findOne({ email });
  console.log(userExist);
  if (!email) {
    throw new error('Please provide email');
  }
  if (!password) {
    throw new error('Please provide password');
  }
  if (!name) {
    throw new error('Please provide name');
  }
  if (!image) {
    throw new error('Please provide image');
  }
  const salt = bcrypt.genSaltSync(6);
  const hashPassword = await bcrypt.hashSync(password, salt);
  if (!hashPassword) {
    throw new error('Failed to hash password');
  }
  const payload = {
    ...req.body,
    role: 'Admin',
    password: hashPassword,
  };

  const userData = new UserModel(payload);
  const saveUser = await userData.save();
  res.status(201).json({
    data: saveUser,
    success: true,
    error: false,
    message: 'user created successfully',
  });
  try {
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      sucess: false,
    });
    console.log(error);
  }
}

module.exports = userSignUp;
