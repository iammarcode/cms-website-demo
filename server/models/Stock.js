var mongoose = require('mongoose')
var Schema = mongoose.Schema

var stockSchema = new Schema({
	title: String,
	text: String,
	tips: String,
	statement01: String,
	statement02: String,
	compositeIndex: Array
})

module.exports = mongoose.model('Stock', stockSchema)
