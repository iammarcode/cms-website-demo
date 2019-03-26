var mongoose = require('mongoose')
var Schema = mongoose.Schema

var footerSchema = new Schema({
	copyright: String,
	dataList: Array
})

module.exports = mongoose.model('Footer', footerSchema)
