const Seller = require('../models/sellerModel');


exports.create = (req, res) => {
	const seller = new Seller(req.body);
	seller.save().then(seller => {
		res.status(201).json({
			seller, 
			message: 'Seller created successfully!'
		})
	}).catch(err => {
		res.status(400).json({
			error: err
		});
	});
};