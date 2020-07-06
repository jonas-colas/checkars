const express = require('express');
const router = express.Router();

const {register, login, logout, requireLogin} = require('../controllers/authController');
const {registerValidator} = require('../validator/');

router.post('/register', registerValidator, register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;