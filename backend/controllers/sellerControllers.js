const Seller = require('../models/sellerModel');


exports.create = (req, res, next) => {
	Seller.find({name: req.body.name}).exec().then(seller =>{
		if(seller.length > 1){
			return res.json(409).json({
				message: 'Name already exist!'
			});
		}else{
			const seller = new Seller(req.body);
			seller.save().then(seller => {
				res.status(201).json({
					seller, 
					message: 'Seller created successfully!'
				})
			}).catch(err => {
				res.status(400).json({
					error: 'Cannot create seller'
				});
			});
		}
	});
};