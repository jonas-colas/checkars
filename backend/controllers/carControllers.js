const Car = require('../models/carModel');


exports.list = (req, res, next) => {
	Car.find().exec().then(cars => {
		console.log(cars);
		res.status(200).json({cars});
	}).catch(err => {
		res.status(400).json({
			error: 'No car found'
		})
	});
};


exports.create = (req, res, next) => {
	//const {seller_id, nombre, precio, kilometros} = req.body;
	const car = new  Car({
		seller_id: req.body.seller_id,
		nombre: req.body.nombre,
		precio: req.body.precio,
		kilometros: req.body.kilometros
	});
	car.save().then(car => {
		res.status(201).json({
			message: 'Car created successfully!',
			createdCar: {
				car_id: car._id,
				precio: car.precio,
				kilometros: car.kilometros
			}
		})
	})
};


exports.readOne = (req, res, next) => {
	const id = req.params.carId;
	Car.findById(id).select('_id precio kilometros').exec().then(car => {
		if(car){
			res.status(200).json({
				car: car
			});
		}else{
			res.status(404).json({
				message: 'No valid entry found for this ID'
			});
		}
	}).catch(err => {
		res.status(400).json({
			error: 'Car does not exist'
		});
	});
};


exports.update = (req, res, next) => {
	const id = req.params.carId;
	
	const updateOps = {};
	for(const ops of req.body){
		updateOps[ops.propName] = ops.value;
	}
	Car.updateOne({_id: id}, {$set: updateOps}).exec().then(result => {
		//console.log(result);
		res.status(200).json({
			message: 'Car updated successfully!',
		});
	}).catch(err => {
		res.status(400).json({
			//error: err
			error: 'Car does not exist'
		});
	});
};


exports.remove = (req, res, next) => {
	const id = req.params.carId;
	Car.deleteOne({_id: id}).exec().then(result => {
		res.status(200).json({
			message: 'Car removed successfully!'
		})
	}).catch(err => {
		res.status(400).json({
			error: 'Cannot remove car'
		})
	});
};