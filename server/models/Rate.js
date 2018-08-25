var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bdSchema = new Schema({
	  number: Number,
	  hours: Number,
	  days: Number,
	  hourlyrate: Number,
	  total: Number,
	  updated_date: { type: Date, default: Date.now }
    });

var RateSchema = new mongoose.Schema({
	  description: String,
	  unit: Number,
	  unitcost: Number,
	  updated_date: { type: Date, default: Date.now },
	  Bd: bdSchema
	});

module.exports = mongoose.model('Rate', RateSchema);