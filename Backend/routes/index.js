const express = require('express');
const router = express.Router();

const userSignUp = require('../controller/userSignup');
const userLogin = require('../controller/userLogin');
const authToken = require('../middleware/authToken');
const userDetails = require('../controller/userDetails');
const userLogOut = require('../controller/userLogout');
router.post('/signup', userSignUp);
router.post('/login', userLogin);
router.get('/users', authToken, userDetails);
router.get('/logout', userLogOut);
module.exports = router;
