const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const autoSchema = new mongoose.Schema({
	seller_id: {type:ObjectId, ref: 'Seller', required:true},
	nombre: {type:String, trim:true, required:true, maxlength:255},
	precio: {type:Number, required:true, trim:true, maxlength:20},
	kilometros: {type:Number, required:true, maxlength:32}
}, {timestamps: true}); 


module.exports = mongoose.model('Auto', autoSchema);