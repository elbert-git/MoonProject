const NodePolyFillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');
 
module.exports={
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, './src/index')
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	devtool: "source-map",
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		}]
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public')
		}
	},
	plugins:[
		new NodePolyFillPlugin()
	]
}
