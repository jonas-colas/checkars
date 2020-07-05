const Auto = require('../models/autoModel');


exports.read = (req, res, next) => {
	Auto.find().exec().then(autos => {
		res.status(200).json({autos});
	}).catch(err => {
		error: err
	});
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
	const id = req.params.autoId;
	Auto.findById(id).select('_id precio kilometros').exec().then(auto => {
		if(auto){
			res.status(200).json({
				car: auto
			});
		}else{
			res.status(404).json({
				message: 'No valid entry found for this ID'
			});
		}
	}).catch(err => {
		res.status(400).json({
			error: 'Auto does not exist'
		});
	});
};


exports.update = (req, res, next) => {
	const id = req.params.autoId;
	
	const updateOps = {};
	for(const ops of req.body){
		updateOps[ops.propName] = ops.value;
	}
	Auto.updateOne({_id: id}, {$set: updateOps}).exec().then(result => {
		//console.log(result);
		res.status(200).json({
			message: 'Auto updated successfully!',
			updatedAuto:{
				_id: result._id,
				precio: result.precio,
				kilometros: result.kilometros
			}
		});
	}).catch(err => {
		res.status(400).json({
			//error: err
			error: 'Auto does not exist'
		});
	});
};