const express = require('express');
const router = express.Router();

const {register, login, logout, requireLogin} = require('../controllers/sellerControllers');
const {userSignupValidator} = require('../validator/');

router.post('/register', register); //userSignupValidator, 
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;