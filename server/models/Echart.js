var mongoose = require('mongoose')
var Schema = mongoose.Schema

var echartSchema = new Schema({
	echart: [
		{
			image: String,
			title: String,
			detail: String
		}
	]
})

module.exports = mongoose.model('Echart', echartSchema)
