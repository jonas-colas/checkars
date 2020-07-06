const express = require('express');
const router = express.Router();

const {requireLogin, isAuth} = require('../controllers/authController');
const {sellerById, getProfile} = require('../controllers/sellerController');//


router.get('/secret/:sellerId', requireLogin, isAuth, (req, res) => {
	res.json({
		seller : req.profile
	});
});

router.get('/seller/:sellerId', requireLogin, isAuth, getProfile); 
router.param('sellerId', sellerById);


module.exports = router;