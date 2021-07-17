const path = require('path')

module.exports = {

	entry:{
		file:'./file.js',
		file1:'./file1.js'
	} ,
	mode: 'production',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].[contenthash].bundle.js',
	},
}
