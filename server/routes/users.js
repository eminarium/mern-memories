const express = require('express');
const router = express.Router();

const signin = require('../controllers/user.js').signin;
const signup = require('../controllers/user.js').signup;

router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;