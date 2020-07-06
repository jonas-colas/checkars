const Seller = require('../models/sellerModel');
const jwt = require('jsonwebtoken'); //to generate seller token when is loggedIn
const expressJwt = require('express-jwt');

exports.register = (req, res, next) => {
	Seller.find({email:req.body.email}).exec().then(seller => {
		if(seller.length > 1){
			return res.status(200).json({
				message: 'Email already exist'
			});
		}else{
			const seller = new Seller(req.body);
			seller.save().then(seller => {
				seller.salt = undefined;
				seller.hashed_password = undefined;
				res.status(201).json({
					message: 'Seller created successfully!',
					seller
				});
			}).catch(err => {
				res.status(400).json({
					error: err
				})
			});
		}
	});
};

exports.login = (req, res, next) => {
	const {email, password} = req.body;
	Seller.findOne({email}, (err, seller) => {
		if(err || !seller){
			return res.status(400).json({
				error: 'Seller with that email does not exist. Please Register!'
			});
		}

		//if Seller is found make sure the email and password match
		//create authenticate method in Seller model
		if(!seller.authenticate(password)){
			return res.status(401).json({
				error: 'Email and password do not match'
			});
		}

		//generate a signed token with her secret
		const token = jwt.sign({_id: seller._id}, process.env.JWT_SECRET);

		//persist the token as 't' in cookie with expiry date
		res.cookie('t', token, {expire: new Date() + 9999});

		//return response with seller and token 
		const {_id, name, email} = seller;
		return res.json({token, seller: {_id, email, name}});
	});
};

exports.logout = (req, res, next) => {
	res.clearCookie('t');
	res.json({message: 'Logout successfully!'});
};

exports.requireLogin = expressJwt({
	secret: process.env.JWT_SECRET,
	sellerProperty: 'auth'
});

exports.isAuth = (req, res, next) => {
	let seller = req.profile && req.auth && req.profile._id == req.auth._id;
	if(!seller){
		return res.status(403).json({
			error: 'Access denied'
		});
	}
	next();
};

