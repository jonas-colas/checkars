const Auto = require('../models/autoModel');


exports.read = (req, res, next) => {
	const auto = new  Auto({

	})
};


exports.create = (req, res, next) => {
	//const {seller_id, nombre, precio, kilometros} = req.body;
	const auto = new  Auto({
		seller_id: req.body.seller_id,
		nombre: req.body.nombre,
		precio: req.body.precio,
		kilometros: req.body.kilometros
	});
	auto.save().then(auto => {
		res.status(201).json({
			message: 'Auto created successfully!',
			createdAuto: {
				car_id: auto._id,
				precio: auto.precio,
				kilometros: auto.kilometros
			}
		})
	})
};


exports.readOne = (req, res, next) => {
	
};


exports.update = (req, res, next) => {
	
};