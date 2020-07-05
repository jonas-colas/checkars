const mongoose = require('mongoose');
//const {v1: uuidv1} = require('uuid');

//const {ObjectId} = mongoose.Schema;

const sellerSchema = new mongoose.Schema({
	name: {type:String, trim:true, required: true, unique: true, maxlength:32},
	status: {type:Boolean, required:true, default:false}
}, {timestamps: true}); 

module.exports = mongoose.model('Seller', sellerSchema);