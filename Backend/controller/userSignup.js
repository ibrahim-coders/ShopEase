const UserModel = require("../models/usermodels");

async function userSignUp(req, res) {
  const { email, password, name, image } = req.body;
  if (!email ) {
    throw new error('Please provide email')
  }
  if (!password ) {
    throw new error('Please provide password')
  }
  if (!name ) {
    throw new error('Please provide name')
  }
  if (!image ) {
    throw new error('Please provide image')
  }
 const userData=new UserModel
  try {
    
  } catch (error) {
    res.json({
      message: error,
      error: true,
      sucess:false,
      
    })
console.log(error)
  }
}