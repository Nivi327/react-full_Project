const express = require('express');
const { signUp, signIn} = require('../controller/auth');
const { validateSignUpRequest, IsResultValid, validateSignInRequest } = require('../validator/auth');

const router = express.Router();

router.post('/signin', validateSignInRequest, IsResultValid, signIn);

router.post('/signup', validateSignUpRequest, IsResultValid, signUp);

module.exports = router;