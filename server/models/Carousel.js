var mongoose = require('mongoose')
var Schema = mongoose.Schema

var carouselSchema = new Schema({
	carousel: [
		{
			image: String,
			title: String,
			detail: String
		}
	]
})

module.exports = mongoose.model('Carousel', carouselSchema)
