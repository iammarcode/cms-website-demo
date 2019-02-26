var mongoose = require('mongoose')
var Schema = mongoose.Schema

var headerSchema = new Schema({
	logo: String,
	nav: Array,
	concat: Array
})

module.exports = mongoose.model('Header', headerSchema)
