const Seller = require('../models/sellerModel');


exports.sellerById = (req, res, next, id) => {
	Seller.findById(id).exec((err, seller) => {
		if(err || !seller) {
			return res.status(400).json({
				error: 'Seller not found'
			});
		}
		req.profile = seller;
		next();
	});
};


exports.getProfile = (req, res) => {
	req.profile.hashed_password = undefined;
	req.profile.salt = undefined;
	return res.json(req.profile);
};



