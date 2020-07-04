const mongoose = require('mongoose');
//const {v1: uuidv1} = require('uuid');

//const {ObjectId} = mongoose.Schema;

const sellerSchema = new mongoose.Schema({
	name: {type:String, trim:true, required: true, maxlength:32}
}, {timestamps: true}); 

module.exports = mongoose.model('Seller', sellerSchema);