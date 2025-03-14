const express = require('express');
const router = express.Router();

const userSignUp = require('../controller/userSignup');
const userLogin = require('../controller/userLogin');
router.post('/signup', userSignUp);
router.post('/login', userLogin);
module.exports = router;
