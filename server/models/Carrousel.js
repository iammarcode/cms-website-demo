var mongoose = require('mongoose')
var Schema = mongoose.Schema

var carrouselSchema = new Schema({
	carrousel: [
		{
			image: String,
			title: String,
			detail: String
		}
	]
})

module.exports = mongoose.model('Carrousel', carrouselSchema)
